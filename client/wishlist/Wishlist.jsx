import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../lib/auth-helper';
import { update } from '../user/api-user';

export default function Wishlist() {
  const { userId } = useParams(); // URL에서 userId 가져오기
  const credentials = auth.isAuthenticated(); // 인증 정보 가져오기
  const [user, setUser] = useState(null);
  const [newItem, setNewItem] = useState({
    title: '',
    author: '',
    published_year: '',
    genre: '',
  });

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + credentials.token, // 인증 토큰 사용
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const userData = await response.json();

      if (!userData.wishlist) {
        userData.wishlist = []; // Ensure wishlist is an array
      }
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addWishlistItem = async () => {
    if (!user) {
      console.error('User not loaded');
      return;
    }

    if (!newItem.title || !newItem.author || !newItem.published_year || !newItem.genre) {
      alert('Please fill in all fields before adding to the wishlist.');
      return;
    }

    const updatedWishlist = [...(user.wishlist || []), newItem];

    try {
      const updatedUser = await update({ userId }, credentials, { wishlist: updatedWishlist });
      setUser(updatedUser);
      setNewItem({ title: '', author: '', published_year: '', genre: '' }); // Reset form
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  const deleteWishlistItem = async (index) => {
    if (!user) {
      console.error('User not loaded');
      return;
    }

    const updatedWishlist = user.wishlist.filter((_, i) => i !== index);

    try {
      const updatedUser = await update({ userId }, credentials, { wishlist: updatedWishlist });
      setUser(updatedUser); // Update the local state with the updated user
    } catch (error) {
      console.error('Error deleting wishlist item:', error);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ color: '#333', marginBottom: '20px' }}>My Wishlist</h3>

      <div style={{ marginBottom: '20px' }}>
        {/* Form for adding a new wishlist item */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newItem.title}
          onChange={handleInputChange}
          style={{ width: '48%', margin: '5px 1%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newItem.author}
          onChange={handleInputChange}
          style={{ width: '48%', margin: '5px 1%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
        />
        <input
          type="text"
          name="published_year"
          placeholder="Published Year"
          value={newItem.published_year}
          onChange={handleInputChange}
          style={{ width: '48%', margin: '5px 1%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={newItem.genre}
          onChange={handleInputChange}
          style={{ width: '48%', margin: '5px 1%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
        />
        <button onClick={addWishlistItem} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', marginTop: '10px' }}>
          Add to Wishlist
        </button>
      </div>

      {user && (
        <div>
          <h2 style={{ color: '#555', marginBottom: '20px' }}>{user.username}'s Wishlist</h2>
          {user && user.wishlist ? (
            user.wishlist.length > 0 ? (
              <ul style={{ listStyle: 'none', padding: '0' }}>
                {user.wishlist.map((item, index) => (
                  <li key={index} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <strong style={{ fontSize: '16px', color: '#333' }}>{item.title}</strong> by {item.author} <br />
                    Published Year: {item.published_year} <br />
                    Genre: {item.genre} <br />
                    <button
                      style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
                      onClick={() => deleteWishlistItem(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your wishlist is empty. Start adding some books!</p>
            )
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}