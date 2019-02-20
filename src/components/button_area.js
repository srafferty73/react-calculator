import React, { Component } from 'react';
import Button from './button.js';

const ButtonArea = ({digits, operands, display}) => {

  return(
    <div>
      <div className="output-display-area">
        <p>{display}</p>
      </div>
      <hr />
      <div className="row">
        <div className="column">
        <p>Digits: </p>
          <Button value={digits[1]} index={1} />
          <Button value={digits[2]} index={2} />
          <Button value={digits[3]} index={3} />
        </div>
        <div className="column">
          <Button value={digits[4]} index={4} />
          <Button value={digits[5]} index={5} />
          <Button value={digits[6]} index={6} />
        </div>
        <div className="column">
          <Button value={digits[7]} index={7} />
          <Button value={digits[8]} index={8} />
          <Button value={digits[9]} index={9} />
          <br />
          <Button value={digits[0]} index={0} />
        </div>
        <br /><br />
        <hr />
      </div>
      <div className="operand-button-area">
        <p>Operands: </p>
          <Button name="+" value={operands[0]} index={operands[10]}/>
          <Button name="-" value={operands[1]} index={operands[1]}/>
          <Button name="*" value={operands[2]} index={operands[2]}/>
          <Button name="/" value={operands[3]} index={operands[3]}/>
          <Button name="=" value={operands[4]} index={operands[4]}/>
          <hr />
      </div>


    </div>
  )

};

export default ButtonArea;
