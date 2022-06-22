import { useState } from "react";
import "./styles.css";
import { rollADice } from "../utils/rollADice";

const initialResult = 0;

export function DiceTray() {
  const [result, setResult] = useState(initialResult);
  // const resultState = useState(initialResult); // [value, setValue]
  // const result = resultState[0];
  // const setResult = resultState[1];

  // 1. Handle button being clicked
  function handleDiceRoll(dice) {
    // 2. Get result of a dice roll
    const result = rollADice(dice);
    // 3. console.log() the result
    console.log(result);
    // 4. Display the dice roll
    //    4a. useState to tell page to rerender
    setResult(result);
  }

  return (
    <div className="bodyContainer">
      <div className="buttonContainer">
        <button onClick={() => handleDiceRoll(4)}>1d4</button>
        <button onClick={() => handleDiceRoll(6)}>1d6</button>
        <button onClick={() => handleDiceRoll(8)}>1d8</button>
        <button onClick={() => handleDiceRoll(10)}>1d10</button>
        <button onClick={() => handleDiceRoll(12)}>1d12</button>
        <button onClick={() => handleDiceRoll(20)}>1d20</button>
        <button onClick={() => handleDiceRoll(100)}>1d100</button>
      </div>
      <div className="container" id="result">
        {result}
      </div>
    </div>
  );
}
