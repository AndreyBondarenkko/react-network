import React from 'react';
import logo from './img/logo192.png';


const Header = ()=>{
    return(
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <a
                        href="#"
                        className="logo">
                        <img src={logo} alt="logo"/>
                    </a>

                    <div className="menu-wrapper">
                        <ul className="menu-list">
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Messages</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Music</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;