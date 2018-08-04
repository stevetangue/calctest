import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test add (e.g. 1 + 2 = 3)
it('sums number', () => {
  expect(sum(1,2)).toEqual(3);
});

// test subtract (e.g. 3 - 2 = 1);
it('subtracts number', () => {
  expect(sub(3,2).toEqual(1));
});

// test multiply (e.g. 2 * 3 = 6)
it('multiplies number', () => {
  expect(mul(2*3).toEqual(6));
});

// test divide (e.g. 12 / 3 = 4)
it('divide number', () => {
  expect(div(12/3).toEqual(4));
});

// test power (e.g. 24 = 16)
it('power number', () => {
  expect(pow(2,4).toEqual(16));
});

// test square_root (e.g. √25 = 5)
it('square root number', () => {
  expect(sqrt(25).toEqual(5));
});

// test log10 (e.g. log(100) = 2)
it('log number', () => {
  expect(log(100).toEqual(2))
});

// test pi
it('pi number', () => {
  expect(pi()).toEqual(3.141592653589793);
  //expect(Math.PI).toEqual(3.141592653589793);
});
