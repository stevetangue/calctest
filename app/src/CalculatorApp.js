import React, { Component } from 'react';


function Calnum(props) {
  return (
      <button>
        {props.value}
      </button>
  )
}

class CalculatorApp extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
        squares: Array(9).fill(null),
    };
  }
  renderCalnum(i) {
    return (
      <Calnum
        value={i}
        onClick= {() => this.props.onClick(i)}
        />
    );
  }

  render() {
    return (
      <div>
          <span>
            todo
          </span>
          <div className="calculator">
            <div className="cal-head">
              <input placeholder="0"/>
            </div>
            <div className="cal-body">
              <button className="cbg">π</button>
              <button className="cbg">e</button>
              <button className="cbg">^</button>
              <button className="cbgo">&divide;</button>
              {this.renderCalnum(7)}
              {this.renderCalnum(8)}
              {this.renderCalnum(9)}
              <button className="cbgo">&times;</button>
              {this.renderCalnum(4)}
              {this.renderCalnum(5)}
              {this.renderCalnum(6)}
              <button className="cbgo">-</button>
              {this.renderCalnum(1)}
              {this.renderCalnum(2)}
              {this.renderCalnum(3)}
              <button className="cbgo">+</button>
              {this.renderCalnum(0)}
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
