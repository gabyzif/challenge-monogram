'use client';
import React from 'react';

const Logo = ({ src, className }) => {
  const handleHover = (event) => {
    event.target.style.filter =
      'drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.58)) drop-shadow(0px -35px 41px rgba(255, 255, 255, 0.41)) drop-shadow(0px -91px 70px rgba(255, 255, 255, 0.51)) drop-shadow(0px -164px 91px rgba(255, 255, 255, 0.31))';
  };

  const handleMouseLeave = (event) => {
    event.target.style.filter = 'none';
  };

  return (
    <a href="#">
      <div className={className} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <img src={src} alt="logo" className="m-auto p-3 lg:p-0" />
      </div>
    </a>
  );
};

export default Logo;
