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

        const argInputs = () => {
          if(calcul.arguments === 2) {
            return (
              <div>
                <input id={calcul.operation} className="input-arg" size="4" placeholder="Arg2" disabled />
                <input id={calcul.operation} className="input-arg" size="4" placeholder="Arg1" disabled />
              </div>
            );
          } else if (calcul.arguments === 1) {
              return <input id={calcul.operation} className="input-arg" size="4" placeholder="Arg1" disabled />;
          } else {
              return 'N/A';
          }
        }

        const isAdd = () => {
            return <Calculations calcul={calcul} />;
        }

        return (
          <tr key={key}>
            <td >{calcul.operation}</td>
            <td>{argInputs()}</td>
            <td>{calcul.symbol}</td>
            <td>{calcul.description}</td>
            <td className="bg text-right">{isAdd()}</td>
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
              <th className="text-right">Calculation Components </th>
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
