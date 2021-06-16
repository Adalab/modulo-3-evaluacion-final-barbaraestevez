import React from 'react';
import "../stylesheets/CharacterCard.scss";
import "../stylesheets/Filters.scss";
import CharacterCard from './CharacterCard';

const CharacterList = props => {
  const characterElements = props.characters.map(character => {
    return ( 
      <li key={character.id} className="card__item"> 
      <CharacterCard character={character} />
    </li>
      );
  });
  return (
    <section>
      <ul className="cards">{characterElements}</ul>
    </section>
  );
};

export default CharacterList;
