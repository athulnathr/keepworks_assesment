import { useState, useRef } from 'react';
import { BUTTON_TEXTS, BUTTON_TYPES } from './constants';

const LogicUnit = {
  [BUTTON_TEXTS.DIVIDE]: (prevValue, nextValue) => prevValue / nextValue,
  [BUTTON_TEXTS.MULTIPLY]: (prevValue, nextValue) => prevValue * nextValue,
  [BUTTON_TEXTS.ADD]: (prevValue, nextValue) => prevValue + nextValue,
  [BUTTON_TEXTS.SUBTRACT]: (prevValue, nextValue) => prevValue - nextValue,
  [BUTTON_TEXTS.EQUALS]: (_, nextValue) => nextValue,
  [BUTTON_TEXTS.CLEAR]: () => 0
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
      performOperation(value);
      if (value === BUTTON_TEXTS.CLEAR) {
        clearAll();
      }
    }
  };

  return [displayValue, handleInput];
};

export default useCalculator;
