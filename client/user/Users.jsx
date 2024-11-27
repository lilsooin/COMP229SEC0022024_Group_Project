import React, { useState, useEffect } from 'react';
import { list } from './api-user.js';
import { Link } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        list(signal)
            .then((data) => {
                if (data && data.error) {
                    setError(data.error);
                } else {
                    setUsers(data || []); // Ensure users is an array
                }
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch users.');
                setLoading(false);
            });

        return () => abortController.abort();
    }, []);

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: '20px',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            color: '#333',
            textAlign: 'center',
        },
        list: {
            listStyleType: 'none',
            padding: 0,
        },
        listItem: {
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: '#fff',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
        },
        listItemHover: {
            backgroundColor: '#f0f0f0',
        },
        error: {
            color: 'red',
            textAlign: 'center',
        },
        loading: {
            textAlign: 'center',
            fontStyle: 'italic',
        },
    };

    if (loading) return <p style={styles.loading}>Loading...</p>;

    if (error) return <p style={styles.error}>{error}</p>;

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Library User List</h2>
            <ul style={styles.list}>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <li
                            key={index}
                            style={styles.listItem}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
                        >
                            {/* Replace username below with the actual property containing the user's name */}
                            {user.username}
                        </li>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </ul>
        </div>
    );
}