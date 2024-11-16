import React, { useState, useEffect } from "react";

import { update } from '../user/api-user.js'
const testuserID = "6737c0814883343b30133f84"

export default function Wishlist({ userId = testuserID, credentials }) {
  const [user, setUser] = useState(null); // Store user data
  const [newItem, setNewItem] = useState({
    bookId: "",
    title: "",
    author: "",
  });

  // Fetch user data with wishlist on component mount
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer " + credentials.t,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const userData = await response.json();
      setUser(userData);
      console.log("userData >>>" + userData)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addWishlistItem = async () => {
    if (!user) {
      console.error("User not loaded");
      return;
    }

    // Add the new item to the wishlist
    const updatedWishlist = [...user.wishlist, newItem];

    // Call the update API
    try {
      const updatedUser = await update(
        { userId },
        credentials,
        { wishlist: updatedWishlist }
      );
      setUser(updatedUser); // Update the local state with the updated user
      setNewItem({ bookId: "", title: "", author: "" }); // Reset the input fields
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };


  return (
    <div>
      {/* <h1>{user.name}'s Wishlist</h1> */}

      {/* Form to add new wishlist item */}
      <div>
        <input
          type="text"
          name="bookId"
          placeholder="Book ID"
          value={newItem.bookId}
          onChange={handleInputChange}
        />
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
        <button onClick={addWishlistItem}>Add to Wishlist</button>
      </div>

      {/* Display wishlist items */}
      <div>
        <h2>Wishlist</h2>
        <ul>
          {/* {user.wishlist.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> by {item.author}
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}