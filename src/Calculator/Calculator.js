import React from 'react';
import Key from './Key';
import useCalculator from './Engine';
import './style.scss';
import { BUTTON_TEXTS, BUTTON_TYPES } from './constants';

const Calculator = () => {
  const [result, handleOperation] = useCalculator();

  const toggleScientificMode = () => {
    [...document.getElementsByClassName('scientific_buttons')].forEach((x) => {
      return x.className.includes('visible')
        ? (x.className = x.className.replace('visible', ' '))
        : (x.className += ' visible');
    });
  };

  return (
    <div className="main-container">
      <div className="calc-container">
        <div className="billboard">{result}</div>
        <div className="keypad">
          <div className="digits">
            <Key
              type={BUTTON_TYPES.OPERATOR}
              value={BUTTON_TEXTS.SIGN}
              onClick={handleOperation}
              className="scientific_buttons"
            />
            <Key
              type={BUTTON_TYPES.OPERATOR}
              value={BUTTON_TEXTS.ROOT}
              onClick={handleOperation}
              className="scientific_buttons"
            />
            <Key
              type={BUTTON_TYPES.OPERATOR}
              value={BUTTON_TEXTS.SQURE}
              onClick={handleOperation}
              className="scientific_buttons"
            />

            <Key value={BUTTON_TEXTS.ONE} onClick={handleOperation} />
            <Key value={BUTTON_TEXTS.TWO} onClick={handleOperation} />
            <Key value={BUTTON_TEXTS.THREE} onClick={handleOperation} />
            <Key value={BUTTON_TEXTS.FOUR} onClick={handleOperation} />
            <Key value={BUTTON_TEXTS.FIVE} onClick={handleOperation} />
            <Key value={BUTTON_TEXTS.SIX} onClick={handleOperation} />
            <Key value={BUTTON_TEXTS.SEVEN} onClick={handleOperation} />
            <Key value={BUTTON_TEXTS.EIGHT} onClick={handleOperation} />
            <Key value={BUTTON_TEXTS.NINE} onClick={handleOperation} />
            <Key
              value={BUTTON_TEXTS.CLEAR}
              type={BUTTON_TYPES.OPERATOR}
              onClick={handleOperation}
            />
            <Key value={BUTTON_TEXTS.ZERO} onClick={handleOperation} />
            <Key
              value={BUTTON_TEXTS.EQUALS}
              type={BUTTON_TYPES.OPERATOR}
              onClick={handleOperation}
            />
          </div>
          <div className="operators">
            <Key
              value={BUTTON_TEXTS.SCI}
              type={BUTTON_TYPES.OPERATOR}
              onClick={toggleScientificMode}
            />
            <Key
              value={BUTTON_TEXTS.ADD}
              type={BUTTON_TYPES.OPERATOR}
              onClick={handleOperation}
            />
            <Key
              value={BUTTON_TEXTS.SUBTRACT}
              type={BUTTON_TYPES.OPERATOR}
              onClick={handleOperation}
            />
            <Key
              value={BUTTON_TEXTS.MULTIPLY}
              type={BUTTON_TYPES.OPERATOR}
              onClick={handleOperation}
            />
            <Key
              value={BUTTON_TEXTS.DIVIDE}
              type={BUTTON_TYPES.OPERATOR}
              onClick={handleOperation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
