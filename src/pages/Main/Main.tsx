import React from 'react';
import './Main.css'; 

const Main: React.FC = () => {
  return (
    <div className="home-page-container">
      <div className='home-page-photo'>
        <img src='/img/me.png' alt='me'/>
      </div>
      <div className='home-page-text-about-me'>
        <p>Hi, I'm <span className='home-page-text -name'>Artur</span></p>
        <p>Front-end developer</p>
        <p className='home-text-tg'>mail: <a href=""></a></p>
        <p className='home-text-tg'>TG: <a href=""></a></p>
        <p className='home-text-tg'>GH: <a href=""></a></p>
        <p className='home-text-tg'>LN: <a href=""></a></p>
      </div>
    </div>
  );
};

export default Main;
