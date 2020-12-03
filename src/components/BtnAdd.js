/* eslint-disable no-nested-ternary */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import 'normalize.css';

export default function BtnAdd() {
  // functional component, currently no state
  function clickMe() {
    <Link to="/about">about</Link>;
  }
  return (
    <div>
      <div className="home__addbtn">
        <button type="button" onClick={clickMe}>
          +
        </button>
      </div>
    </div>
  );
}
