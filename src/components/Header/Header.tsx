import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {

    return (
        <header>
            <div className="header-container">
                <Link to={`/`}>Home</Link>
                <Link to={`/about`}>About me</Link>
                <Link to={`/portfolio`}>Portfolio</Link>
            </div>  
        </header>
    );  
};

export default Header;
