import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h3 style={{marginLeft:'120px', color:'orangered'}}>
            Food Shop
            </h3>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact us</a></li>
                    <li><a href="">Order</a></li>
                    <li><a href="">About us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;



