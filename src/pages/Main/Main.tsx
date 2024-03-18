import React from 'react';
import './Main.css'; 

const Main: React.FC = () => {
  return (
    <div className="home-page-container">
      <div className='home-page-photo'>
        <img src='/img/me.png' alt='me'/>
      </div>
      <div className='home-page-text-about-me'>
        <p>Hi, I'm Artur</p>
        <p>mail</p>
        <p>TG</p>
        <p>GH</p>
        <p>LN</p>
      </div>
    </div>
  );
};

export default Main;
