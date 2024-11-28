import React, { useState, useEffect } from 'react';
import { useLocation, Navigate, Link, useParams } from 'react-router-dom';
import auth from '../lib/auth-helper.js';
import { read } from './api-user.js';

export default function Profile() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const jwt = auth.isAuthenticated();
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await read({ userId: userId }, { t: jwt.token });
        if (data.error) {
          setRedirectToSignin(true);
        } else {
          setUser(data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId, jwt.token]);

  if (redirectToSignin) {
    return <Navigate to="/signin" state={{ from: location.pathname }} replace />;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', marginTop: '40px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ color: '#333', textAlign: 'center' }}>Profile</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <p style={{ margin: '0', fontWeight: 'bold' }}>{user.username || 'N/A'}</p>
            <p style={{ margin: '0', color: '#666' }}>{user.email || 'N/A'}</p>
          </div>
        </li>
        <li style={{ borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>Joined: {user.created ? new Date(user.created).toDateString() : 'N/A'}</p>
        </li>
      </ul>
    </div>
  );
}
