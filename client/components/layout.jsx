import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../src/RSA-logo.png'

export default function Layout() {
    return (
        <>
        <header>
            <div className="logo">
                <img src={logo} width={100}></img>
            </div>

            <nav>
                <Link to="/">Home</Link> | 
                 <Link to="/books">Books</Link> |
                 <Link to="/wishlist">My Wishlist</Link> |
                <Link to="/signin">Sign In</Link> |
                <Link to="/signup">Sign Up</Link> |
            </nav>
            <h2>Library App</h2>
           
        </header>
        <br />
        <hr />
    </>
    );
}
