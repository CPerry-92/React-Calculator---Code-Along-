import './App.css';

import Operators from './Components/Operators';
import Numbers from './Components/Numbers';

import {evaluate} from "mathjs"
import { useState } from 'react';


const App = () => {
  //State to store the display data
  const [input, setInput] = useState("");

  //Calculation function based on button click / Clear display
  const calculate = (button) => {
    if (button === "=") {
      const result = evaluate(input);
      setInput(result);
    } else if (button === "c") {
      setInput(""); //('0')
    } else {
      setInput(input + button);
    }
  };

  // Output the state to the display 
  const handleClick = (event) => {
    const display = event.target.textContent;
    calculate(display);
  };

  //Set the value to Zero
  const setZero = (value) => {
    if (input === "0") {
      setInput(value);
      return;
    }
    setInput(input + value);
  };

  //Passing functions and data to the components as props
  return (
    <div className="App">
      <div>Calculator</div>
      <h2>{input}</h2>
      <Operators handleClick={handleClick} />
      <Numbers handleClick={handleClick} />
    </div>
  );
};

export default App;
