import React from 'react';
import Key from './Key';
import useCalculator from './Engine';
const Calculator = () => {
  const [result, handleOperation] = useCalculator();
  return (
    <div className="main-container">
      <div className="calc-container">
        <div className="billboard">{result}</div>
        <div className="keypad">
          <div className="digits">
            <Key value={1} onClick={handleOperation} />
            <Key value={2} onClick={handleOperation} />
            <Key value={3} onClick={handleOperation} />
            <Key value={4} onClick={handleOperation} />
            <Key value={5} onClick={handleOperation} />
            <Key value={6} onClick={handleOperation} />
            <Key value={7} onClick={handleOperation} />
            <Key value={8} onClick={handleOperation} />
            <Key value={9} onClick={handleOperation} />
            <Key value="C" type={'operator'} onClick={handleOperation} />
            <Key value={'.'} className="dot" onClick={handleOperation} />
            <Key
              value="="
              type={'operator'}
              className="equal"
              onClick={handleOperation}
            />
          </div>
          <div className="operators">
            <Key value="+" type={'operator'} onClick={handleOperation} />
            <Key value="-" type={'operator'} onClick={handleOperation} />
            <Key value="X" type={'operator'} onClick={handleOperation} />
            <Key value="/" type={'operator'} onClick={handleOperation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
