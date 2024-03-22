import React from "react";
import './Header.css';

const Header: React.FC = () => {

    return (
        <header>
            <div className="header-container">
                <p className='Home'>Home</p>
                <p className='About me'>About me</p>
                <p className='Portfolio'>Portfolio</p>
            </div>  
        </header>
    );  
};

export default Header;
