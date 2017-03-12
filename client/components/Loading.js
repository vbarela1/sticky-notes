import React from 'react';
import spinner from '../images/spinner.gif';

const Loading = ({ data }) => (
  <div className="center">
    <h3>{`Loading ${data}...`}</h3>
    <br />
    <img src={spinner} />
  </div>
)

export default Loading;
