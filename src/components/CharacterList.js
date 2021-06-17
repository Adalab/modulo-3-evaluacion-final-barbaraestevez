import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  if (props.characters.length === 0) {
   return <p className="not-found">Personaje no encontrado</p>;
  } else {
    const characterElements = props.characters.map((character) => {
      return (
        <li key={character.id} className="card__item">
          <CharacterCard character={character} />
        </li>
      );
    });
    return (
      <section className="cards__container">
        <ul className="cards">{characterElements}</ul>
      </section>
    );
  }
};

export default CharacterList;
