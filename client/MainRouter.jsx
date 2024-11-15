import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Books from './books/Books.jsx'
import Wishlist from './wishlist/Wishlist.jsx'
import Signup from './user/Signup.jsx'
import Signin from './lib/Signin.jsx'
import PrivateRoute from './lib/PrivateRoute.jsx'

import Layout from './components/layout'
const MainRouter = () => {
    return (<div>
        <Layout />
        <Routes>

            <Route exact path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/wishlist/:userId" element={<Wishlist />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            {/* <Route
 path="/user/edit/:userId"
 element={
 <PrivateRoute>
 <EditProfile />
 </PrivateRoute>
 }
 /> */}

        </Routes>
    </div>
    )
}
export default MainRouter

