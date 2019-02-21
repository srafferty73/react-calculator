import React, { Component } from 'react';
import ButtonArea from '../components/button_area.js';

class CalcBody extends Component {

  constructor(props){
    super(props);
    this.state = {
      operands: ["+", "-", "*", "/", "="],
      digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      display: 0
    };

    this.updateDisplay = this.updateDisplay.bind(this);
  };

  updateDisplay(index) {
    var selectedDigit = this.state.digits[index];
    var currentDisplay = this.state.display;
    console.log("SELECTED DIGIT :", selectedDigit);
    console.log("CURRENT :", currentDisplay);
    selectedDigit = currentDisplay + selectedDigit;
    // selectedDigit = currentDisplay - selectedDigit;
    // selectedDigit = selectedDigit * currentDisplay;
    // selectedDigit = selectedDigit / currentDisplay;
    this.setState( {
      display: selectedDigit
    });
  };

  render() {
    return (
      <div className="calc-body">
      <h1>Digital Calculator</h1>
      <hr />
      <ButtonArea
        digits={this.state.digits} operands={this.state.operands}
        display={this.state.display} updateDisplay={this.updateDisplay} />
      </div>
    );
  };
};

export default CalcBody;
