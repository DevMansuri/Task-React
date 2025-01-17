import { useState } from 'react';
import './ToggleButton.css'; 
import '../../index.css'

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div className="toggle-container">
      <button
        onClick={handleToggle}
        className={isOn ? 'button-on' : 'button-off'}
      >
        {isOn ? 'On' : 'Off'}
      </button>

      <div
        className={isOn ? 'box-on' : 'box-off'}
      ></div>
    </div>
  );
};

export default ToggleButton;
