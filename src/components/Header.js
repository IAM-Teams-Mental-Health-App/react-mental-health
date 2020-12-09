/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site__header">
      <div className="header__inner">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
      </div>
    </header>
  );
}
