import React, { Component } from 'react';

const Button = (props) =>  {

  const handleClick = () => {
    // console.log("Button pressed: ", (props.value));
    props.updateDisplay(props.index);
    console.log("HELLO");
    // props.playMove(props.index);
  };

  return (
    <button onClick={handleClick} className="button">{props.value}</button>
  );
};

export default Button;
