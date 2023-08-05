import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import cars from './App';
import reportWebVitals from './reportWebVitals';
const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: { 0: hondaTopColour }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: { 0: teslaTopColour }
} = tesla;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <table className='table'>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
