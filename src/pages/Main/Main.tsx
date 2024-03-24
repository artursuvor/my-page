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
        <p className='home-text-tg'>mail</p>
        <p className='home-text-tg'>TG</p>
        <p className='home-text-tg'>GH</p>
        <p className='home-text-tg'>LN</p>
      </div>
    </div>
  );
};

export default Main;
