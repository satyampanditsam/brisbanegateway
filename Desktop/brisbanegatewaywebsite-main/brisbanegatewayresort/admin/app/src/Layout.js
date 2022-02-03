import React, {useState, useEffect} from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
function Layout(props) {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;