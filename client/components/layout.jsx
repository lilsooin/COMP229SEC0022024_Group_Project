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

    // Check if the user is authenticated and log their user ID
    const authenticatedUser = auth.isAuthenticated();
    if (authenticatedUser) {
        console.log("Authenticated User ID:", authenticatedUser.user._id);
    } else {
        console.log("User is not authenticated.");
    }

    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} width={100} alt="Library Logo" />
                </div>

                <nav>
                    <Link to="/" style={isActive(location, "/")}>Home</Link> |
                    <Link to="/landing" style={isActive(location, "/landing")}>Landing Page</Link> |
                    <Link to="/users" style={isActive(location, "/users")}>Library Users</Link> |

                    <Link to="/books" style={isActive(location, "/books")}>Books</Link> |
                    {
                        !auth.isAuthenticated() ? (
                            <>
                                <Link to="/signin" style={isActive(location, "/signin")}>Sign In</Link> |
                                <Link to="/signup" style={isActive(location, "/signup")}>Sign Up</Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to={`/wishlist/${auth.isAuthenticated().user._id}`} // 동적 userId 전달
                                    style={isActive(location, "/wishlist/" + auth.isAuthenticated().user._id)}>My Wishlist</Link> |

                                <Link to={"/myprofile/" + auth.isAuthenticated().user._id}
                                    style={isActive(location, "/myprofile/" + auth.isAuthenticated().user._id)}>My Profile
                                </Link> |
                                <span
                                    style={{ color: '#0000ff', cursor: 'pointer' }}
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