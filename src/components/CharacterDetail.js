import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  return (
    <div className="card">
        Detalle del caracter
      <Link to="/">Volver al inicio</Link>
      <header>
        <h2>{props.character.name}</h2>
      </header>
      <section>
        <img className="card__img" src={props.character.image} alt={props.character.name} />
        <h4 className="card__title">{props.character.name}</h4>
        <ul className="xxx">
          <li>Especie: {props.character.specie}</li>
          <li>Nombre: {props.character.charactername}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
