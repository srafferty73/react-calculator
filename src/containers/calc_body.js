import React, { Component } from 'react';
import ButtonArea from '../components/button_area.js';

class CalcBody extends Component {

  constructor(props){
    super(props);
    this.state = {
      digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      operands: ["+", "-", "*", "/", "="],
      display: "0"
    };
  };

  render() {
    return (
      <div className="calc-body">
      <h1>Digital Calculator</h1>
      <ButtonArea digits={this.state.digits} operands={this.state.operands} display={this.state.display} />
      </div>
    );
  };
};

export default CalcBody;
