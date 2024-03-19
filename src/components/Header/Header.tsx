import React from "react";
import './Header.css';

const Header: React.FC = () => {

    return (
        <header>
            <div className="header-container">
                <p>Home</p>
                <p>About me</p>
                <p>Portfolio</p>
            </div>  
        </header>
    );  
};

export default Header;
