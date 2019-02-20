import React, { Component } from 'react';
import Button from './button.js';

const ButtonArea = ({digits, operands, display}) => {

  return(
    <div className="button-area">
    <p>Display: {display}</p>
    <p>Digits: {digits}</p>
    <p>Operands: {operands}</p>

    </div>
  )

};

export default ButtonArea;
