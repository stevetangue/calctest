import React, { Component } from 'react';
import Calculations from  './components/Calculations';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculations: [],
    }
  }

  componentDidMount() {
    // service - operations
    fetch('http://calctest.iesim.biz/operations')
    .then(results => {
      return results.json();
    }).then(data => {
      let cal = data.map((calcul, key) => {
      function argInputs() {
        if(calcul.arguments === 2) {
          return (
            <div>
              <input id={calcul.operation} className="input-arg" size="4" placeholder = "Arg1" />
              <input id={calcul.operation} className="input-arg" size="4" placeholder = "Arg2"/>
            </div>
          );
        } else if (calcul.arguments === 1) {
          return <input id={calcul.operation} className="input-arg" size="4" placeholder = "Arg1"/>;
        } else {
          return 'N/A';
        }
      }

        const isAdd = () => {
          if(calcul.operation === "add") {
            return <Calculations />;
          } else {
            return <div className="todocomment">TODO - {calcul.operation}</div>
          }
        }

        return (
          <tr key={key}>
            <td >{calcul.operation}</td>
            <td>{argInputs()}</td>
            <td>{calcul.symbol}</td>
            <td>{calcul.description}</td>
            <td>{isAdd()}</td>
          </tr>
        )
      })
      this.setState({calculations: cal});
    })
  }

  render() {
    return (
      <div className="calculation-container">
        <b>Calctest Using ReactJs and Jest</b>
        <table>
          <thead>
            <tr>
              <th>Operation </th>
              <th>Arguments </th>
              <th>Symbol </th>
              <th>Description </th>
              <th className="text-left">Calculation Components </th>
            </tr>
          </thead>
          <tbody>
              {this.state.calculations}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
