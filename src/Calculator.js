import React from 'react';

const Calculator = () => {
  return (
    <div className="frame">
      <div className="main-container">
        <div className="calc-container">
          <div id="input">100</div>
          <div className="keypad-container">
            <div id="buttons-container">
              <div className="btn btn-num">1</div>
              <div className="btn btn-num">2</div>
              <div className="btn btn-num">3</div>
              <div className="btn btn-num">4</div>
              <div className="btn btn-num">5</div>
              <div className="btn btn-num">6</div>
              <div className="btn btn-num">7</div>
              <div className="btn btn-num">8</div>
              <div className="btn btn-num">9</div>
              <div className="btn btn-operator">
                <i className="far fa-trash-alt"></i>
              </div>
              <div className="btn btn-num dot">0</div>
              <div className="btn btn-operator equal">
                <i className="fas fa-equals"></i>
              </div>
            </div>
            <div id="operators">
              <div className="btn btn-operator">
                <i className="fas fa-plus"></i>
              </div>
              <div className="btn btn-operator">
                <i className="fas fa-minus"></i>
              </div>
              <div className="btn btn-operator">
                <i className="fas fa-times"></i>
              </div>
              <div className="btn btn-operator">
                <i className="fas fa-divide"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
