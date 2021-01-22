import { useState, useRef } from 'react';

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (_, nextValue) => nextValue,
  C: () => 0
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
        const newValue = CalculatorOperations[operator](
          currentValue,
          inputValue
        );
        setValue(newValue);
        setDisplayValue(String(newValue));
      }
      waitingForOperand.current = true;
      setOperator(nextOperator);
    }
  };

  const handleInput = (value, type) => {
    if (type === 'number') {
      inputDigit(value);
    } else if (type === 'operator') {
      performOperation(value);
      if (value === 'C') {
        clearAll();
      }
    }
  };

  return [displayValue, handleInput];
};

export default useCalculator;
