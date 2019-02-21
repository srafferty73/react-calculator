import React, { Component } from 'react';

const Button = (props) =>  {

  const handleClick = () => {
    var beep = Math.floor(Math.random() * 10)+1;
    document.getElementById('audiotag'+ beep).play();
    props.updateDisplay(props.index);
  };

  return (
    <button onClick={handleClick} className="button">{props.value}
    <audio id="audiotag1" src="https://www.pacdv.com/sounds/interface_sound_effects/beep-2.wav" preload="auto"></audio>
    <audio id="audiotag2" src="https://www.pacdv.com/sounds/interface_sound_effects/beep-2.wav" preload="auto"></audio>
    <audio id="audiotag3" src="https://www.pacdv.com/sounds/interface_sound_effects/beep-3.wav" preload="auto"></audio>
    <audio id="audiotag4" src="https://www.pacdv.com/sounds/interface_sound_effects/beep-4.wav" preload="auto"></audio>
    <audio id="audiotag5" src="https://www.pacdv.com/sounds/interface_sound_effects/beep-5.wav" preload="auto"></audio>
    <audio id="audiotag6" src="https://www.pacdv.com/sounds/interface_sound_effects/beep-6.wav" preload="auto"></audio>
    <audio id="audiotag7" src="https://www.pacdv.com/sounds/interface_sound_effects/beep-6.wav" preload="auto"></audio>
    <audio id="audiotag8" src="https://www.pacdv.com/sounds/interface_sound_effects/beep-4.wav" preload="auto"></audio>
    <audio id="audiotag9" src="https://www.pacdv.com/sounds/interface_sound_effects/beep-3.wav" preload="auto"></audio>
    <audio id="audiotag10" src="https://www.pacdv.com/sounds/interface_sound_effects/sound110.wav" preload="auto"></audio>
    </button>
  );
};

export default Button;
