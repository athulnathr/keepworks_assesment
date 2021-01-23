import React from 'react';
import Calculator from './Calculator';
import ThemeSwitch from './components/ThemeSwitch';
import './styles/main.scss';
const App = () => {
  return (
    <div className="light" id="viewport">
      <ThemeSwitch />
      <Calculator />
    </div>
  );
};
export default App;
