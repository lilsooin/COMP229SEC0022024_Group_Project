import React from 'react';
import auth from '../lib/auth-helper';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../src/RSA-logo.png';

const isActive = (location, path) => {
    return location.pathname === path ? { color: '#ff4081' } : { color: '#0000ff' }; // Default color blue (#0000ff)
};

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} width={100} alt="Library Logo" />
                </div>

                <nav>
                    <Link to="/" style={isActive(location, "/")}>Home</Link> |
                    <Link to="/books" style={isActive(location, "/books")}>Books</Link> |
                    {
                        !auth.isAuthenticated() ? (
                            <>
                                <Link to="/signin" style={isActive(location, "/signin")}>Sign In</Link> |
                                <Link to="/signup" style={isActive(location, "/signup")}>Sign Up</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/wishlist" style={isActive(location, "/wishlist/" + auth.isAuthenticated().user._id)}>My Wishlist</Link> |
                                <span
                                    style={{ cursor: 'pointer', color: '#ff4081' }}
                                    onClick={() => {
                                        auth.clearJWT(() => navigate('/'));
                                    }}
                                >
                                    Sign Out
                                </span>
                            </>
                        )
                    }
                </nav>
                <h2>Library App</h2>
            </header>
            <br />
            <hr />
        </>
    );
}