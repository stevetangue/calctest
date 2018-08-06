import React, { Component } from 'react';
// import Sum from './sum';
// import Sub from './sub';
// import Mul from './mul';
// import Div from './div';
// import Pow from './pow';
// import Sqrt from './sqrt';
// import Log from './log';
// import Pi from './pi';
import axios from 'axios';

class Calculation extends Component {
  constructor(props) {
      super(props);
      this.state = {
        op1: '',
        op2: '',
        result: null,
        error: null,
      };
  }

  // Form submit service
  onChange = (e) => {

    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {

    const serviceUrl = 'http://calctest.iesim.biz';
    e.preventDefault();
    const {op1, op2} = this.state;

    let caclop = this.props.calcul.operation;

    // if(op1 === "" || op2 === "") {
    //   // TODO output message error + styles on input
    //   this.setState({error: "Must not be empty."});
    //   return console.log("Must not be empty.");
    // }
    // if(isNaN(op1) || isNaN(op2)) {
    //   // TODO output message error + styles on input
    //   this.setState({error: "Must be a number."});
    //   return console.log("Must be a number.");
    // }

    axios.post(serviceUrl + '/'+caclop+'?op1='+op1+'&op2='+op2)
      .then((response) => {
        this.setState({result: response.data.result});
      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {
    const { op1, op2, result, error, symbol } = this.state;
    const calcul = this.props.calcul;

    const argInputs = () => {
        if (this.props.calcul.arguments === 2) {
          return (
            <div>
              <input type="text" name="op2" value={op2} onChange={this.onChange} size="4" placeholder = "Arg2"/>
              <span className="symbol"> {calcul.symbol} </span>
              <input type="text" name="op1" value={op1} onChange={this.onChange} size="4" placeholder = "Arg1"/>
            </div>
            );
        } else if (this.props.calcul.arguments === 1) {
          return (
          <div>
            <input type="text" name="op1" value={op1} onChange={this.onChange} size="4" placeholder = "Arg1"/>
            <span className="symbol"> {calcul.symbol} </span>
          </div>
          );
        } else {
          return (
          <span className="symbol"> {calcul.symbol} </span>
          );
        }
    }

    return (
      <div className="component">
        <span className="result"> {result}< /span>
        <form onSubmit={this.onSubmit}>
          <button type="submit"> = </button>
          {argInputs()}
        </form>
        <div className="clearfix"></div>
        <div className="error"> {error}< /div>
      </div>

    )
  }
}

export default Calculation
