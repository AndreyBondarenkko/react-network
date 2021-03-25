import React from 'react';
import logoFooter from './img/logo192.png';

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="container">
                <a href="/"
                   className="logo-link">
                    <img src={logoFooter} alt="logo-footer"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;