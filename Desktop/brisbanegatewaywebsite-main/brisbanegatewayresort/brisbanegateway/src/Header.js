import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';

const Header = (props) => {
    return (
        <div className='header_outer'>
            <div className='container container-header'>
                <Navbar />
            </div>
        </div>
    )
}


export default Header;