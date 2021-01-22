import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './Calculator';
const App = () => {
  return (
    <div className="background">
      <Calculator />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
