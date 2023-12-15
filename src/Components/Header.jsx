import React from 'react';
import '../Styles/Header.css';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    {/*at "to=" give id of a div tag to scroll*/ }
                    <Link to="prop" smooth= {true} duration={800}>Home</Link>   
                    <Link to="billboard" smooth= {true} duration={500}>Notifications</Link>
                    <Link to="sm" smooth= {true} duration={500  }>Contact us</Link>
                    {/* <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Notifications</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Placements</a></li>
                    <li><a href="#">Contact us</a></li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;