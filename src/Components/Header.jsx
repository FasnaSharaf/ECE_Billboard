import React from 'react';
import '../Styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Notifications</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Placements</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;