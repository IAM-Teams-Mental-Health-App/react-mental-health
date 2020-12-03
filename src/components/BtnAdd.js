import React from 'react';
import { Link } from 'react-router-dom';

export default function BtnAdd() {
  // functional component, currently no state
  // function clickMe() {
  //   <Link to="/about">about</Link>;
  // }
  return (
    <div className="home__addbtn">
      <Link to="/home/create">+</Link>
    </div>
  );
}
