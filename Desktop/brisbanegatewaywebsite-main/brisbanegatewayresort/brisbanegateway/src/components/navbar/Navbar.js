import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import logo from '../../../public/images/nav-logo.png';
import Button2 from '../../Button2';
import "./Navbar.css";

function Navbar(props) {
    return (
        <nav className='NavbarItems'>
            <a className='NavbarLogo' href='/'><img class='logoImage' src={logo}/></a>
            <ul className='main-menu'>
                {MenuItems.map((item, index)=>{
                    return (
                        <li key={index}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
            <Button2 buttonText='Book Now' url='https://bookingsau.newbook.cloud/brisbane_gateway_resort/' />
            <button className='MenuButton' >Menu</button>
        </nav>
    )
}

export default Navbar;