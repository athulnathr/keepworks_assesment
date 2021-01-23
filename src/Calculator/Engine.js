import { useState, useRef } from 'react';
import { BUTTON_TEXTS, BUTTON_TYPES, SCIENTIFIC_BUTTONS } from './constants';

const LogicUnit = {
  [BUTTON_TEXTS.DIVIDE]: (prevValue, nextValue) => prevValue / nextValue,
  [BUTTON_TEXTS.MULTIPLY]: (prevValue, nextValue) => prevValue * nextValue,
  [BUTTON_TEXTS.ADD]: (prevValue, nextValue) => prevValue + nextValue,
  [BUTTON_TEXTS.SUBTRACT]: (prevValue, nextValue) => prevValue - nextValue,
  [BUTTON_TEXTS.EQUALS]: (_, nextValue) => nextValue,
  [BUTTON_TEXTS.CLEAR]: () => 0,
  [BUTTON_TEXTS.SIGN]: (_, nextValue) => nextValue * -1,
  [BUTTON_TEXTS.ROOT]: (_, nextValue) => Math.sqrt(nextValue).toFixed(5),
  [BUTTON_TEXTS.SQURE]: (_, nextValue) => (nextValue * nextValue).toPrecision(8)
};

const useCalculator = () => {
  const [value, setValue] = useState(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const waitingForOperand = useRef(false);

  const inputDigit = (digit) => {
    if (waitingForOperand.current) {
      setDisplayValue(String(digit));
      waitingForOperand.current = false;
    } else {
      setDisplayValue(
        displayValue === '0' ? String(digit) : displayValue + digit
      );
    }
  };

  const clearAll = () => {
    setValue(null);
    setDisplayValue('0');
    setOperator(null);
    waitingForOperand.current === false;
  };

  const performScientificOperation = (operator) => {
    // return;
    if (operator !== BUTTON_TEXTS.SIGN) {
      const currentValue = value || 0;
      const newValue = LogicUnit[operator](
        currentValue,
        parseFloat(displayValue)
      );
      setValue(newValue);
      setDisplayValue(String(newValue));

      waitingForOperand.current = true;
      setOperator(null); //
    } else {
      const newValue = LogicUnit[operator](0, parseFloat(displayValue));
      setValue(newValue);
      setOperator(null);
      setDisplayValue(String(newValue));
    }
  };

  const performOperation = (nextOperator) => {
    if (!waitingForOperand.current) {
      const inputValue = parseFloat(displayValue);
      if (value == null) {
        setValue(inputValue);
      } else if (operator) {
        const currentValue = value || 0;
        const newValue = LogicUnit[operator](currentValue, inputValue);
        setValue(newValue);
        setDisplayValue(String(newValue));
      }
      waitingForOperand.current = true;
      setOperator(nextOperator);
    }
  };

  const handleInput = (value, type) => {
    if (type === BUTTON_TYPES.NUMBER) {
      inputDigit(value);
    } else if (type === BUTTON_TYPES.OPERATOR) {
      if (value === BUTTON_TEXTS.CLEAR) {
        clearAll();
      }
      if (SCIENTIFIC_BUTTONS.indexOf(value) > -1) {
        performScientificOperation(value);
      } else {
        performOperation(value);
      }
    }
  };

  console.log(displayValue, value, operator, waitingForOperand);

  return [displayValue, handleInput];
};

export default useCalculator;
