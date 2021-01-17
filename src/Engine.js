import { useState } from 'react';
const CalculatorOperations = {
  '/': (firstValue, secondValue) => firstValue / secondValue,
  X: (firstValue, secondValue) => firstValue * secondValue,
  '+': (firstValue, secondValue) => firstValue + secondValue,
  '-': (firstValue, secondValue) => firstValue - secondValue,
  '=': (_, secondValue) => secondValue
};

const useCalculator = () => {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState('0');
  const [op, setOp] = useState(null);

  const handleNum = (number) => {
    setNextValue(nextValue === '0' ? String(number) : nextValue + number);
  };
  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + '.');
    }
  };
  // const percentage = () => {
  //   setNextValue(parseFloat(nextValue) / 100);
  //   if (prevValue && nextValue === '') {
  //     setPrevValue(parseFloat(prevValue) / 100);
  //   }
  // };
  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };
  const clearData = () => {
    setNextValue('0');
    setPrevValue(0);
  };
  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleOperation = (input) => {
    if (Number.isInteger(input)) {
      handleNum(parseInt(input, 10));
    } else if (input in CalculatorOperations) {
      if (op === null) {
        setOp(input);
        setPrevValue(nextValue);
        setNextValue('');
      }
      if (op) {
        setOp(input);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (input === 'C') {
      clearData();
    } else if (input === '\xB1') {
      changeSign();
    } else if (input === '.') {
      insertDot();
    }
  };

  return [nextValue, handleOperation];
};

export default useCalculator;
