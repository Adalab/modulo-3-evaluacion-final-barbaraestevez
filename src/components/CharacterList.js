import React from 'react';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  return (
    <div className="">
      <h1 className="title">XXX</h1>
      <nav>
        <ul className="nav__list">
          <li className="nav__list--item">
          <Link to="/counter">
              Contador
              </Link>
          </li>
          <li className="nav__list--item">
          <Link to="/relax">
              Relax
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CharacterList;
