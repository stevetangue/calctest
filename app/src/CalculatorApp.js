import React, { Component } from 'react';


class CalculatorApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <pre>
            <code>
             //TODO
            </code>
          </pre>

          <div className="calculator">
            <div className="cal-head">
              <input placeholder="0"/>
            </div>
            <div className="cal-body">
              <button className="cbg">π</button>
              <button className="cbg">e</button>
              <button className="cbg">^</button>
              <button className="cbgo">&divide;</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button className="cbgo">&times;</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button className="cbgo">-</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button className="cbgo">+</button>
              <button>0</button>
              <button>√</button>
              <button>ln</button>
              <button className="cbgb">=</button>
            </div>
          </div>
        </div>
    );
  }
}

export default CalculatorApp;
