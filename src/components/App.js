import React, { useState, useEffect } from "react";
import "../stylesheets/index.scss";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/API";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(
    () => {
      // pedir datos de personajes
      getDataFromApi().then(charactersData => {
        setCharacters(charactersData);
      });
    },
    [] /*parámetro que nos indica cuándo se debe ejecutar el useEffect*/
  );
  return (
    <div className="main__container">
      <main>
        <h1>Ricky and Morty</h1>
      </main>
    </div>
  );
};

export default App;
