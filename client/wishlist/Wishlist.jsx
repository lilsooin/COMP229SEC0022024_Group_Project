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
          Authorization: 'Bearer ' + credentials.t, // 인증 토큰 사용
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const userData = await response.json();
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

    const updatedWishlist = [...user.wishlist, newItem];

    try {
      const updatedUser = await update({ userId }, credentials, { wishlist: updatedWishlist });
      setUser(updatedUser);
      setNewItem({ title: '', author: '', published_year: '', genre: '' }); // Reset form
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  return (
    <div>
      <h3>My Wishlist</h3>

      <div>
        {/* Form for adding a new wishlist item */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newItem.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newItem.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="published_year"
          placeholder="Published Year"
          value={newItem.published_year}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={newItem.genre}
          onChange={handleInputChange}
        />
        <button onClick={addWishlistItem}>Add to Wishlist</button>
      </div>

      {user && (
        <div>
          <h2>{user.username}'s Wishlist</h2>
          {user && user.wishlist ? ( // Check if `user` and `wishlist` exist
            user.wishlist.length > 0 ? ( // Check if `wishlist` has items
              <ul>
                {user.wishlist.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}</strong> by {item.author} <br />
                    Published Year: {item.published_year} <br />
                    Genre: {item.genre}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your wishlist is empty. Start adding some books!</p> // Message for empty wishlist
            )
          ) : (
            <div></div>
          )}
        </div>
      )}
    
    </div>
  );
}