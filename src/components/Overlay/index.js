import React from 'react';
import './__style.css';

const Overlay = ({ onclickFunc }) => {
    return(
      <div className="overlay" onClick={onclickFunc}></div>
    )
};

export default Overlay;
