/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site__header">
      <div className="header__inner">
        <Link to="/">Home</Link>
        <Link to="/create">Create Lantern</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
}
