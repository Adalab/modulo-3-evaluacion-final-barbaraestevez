import React, { useState, useEffect } from "react";
import "../stylesheets/index.scss";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/API";
import ls from "../services/local-storage";
import CharacterList from "./CharacterList";


const App = () => {
  const [characters, setCharacters] = useState(ls.get('characters', []));
  const [filterText, setFilterText] = useState(ls.get('filterText', ''));

  useEffect(
    () => {
      // pedir datos de personajes
      if (characters.length === 0)
      getDataFromApi().then(charactersData => {
        setCharacters(charactersData);
      });
    },
    [] /*parámetro que nos indica cuándo se debe ejecutar el useEffect*/
  );

  // guardamos datos en localstorage
  useEffect(() => {
    ls.set('characters', characters)
  }, [characters]);

  return (
    <div className="main__container">
      <main>
        <h1>Ricky and Morty</h1>
        <CharacterList characters={characters}/>
      </main>
    </div>
  );
};

export default App;
