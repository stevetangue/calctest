import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './calculatorapp.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
