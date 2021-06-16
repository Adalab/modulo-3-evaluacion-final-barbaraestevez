import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/index.scss";
import "../stylesheets/App.scss";
import "../stylesheets/Filters.scss";
import getDataFromApi from "../services/API";
import ls from "../services/local-storage";
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import Footer from "./Footer";

const App = () => {
  // state
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(/*ls.get('filterName', '')*/ "");
  const [filterSpecie, setFilterSpecie] = useState(ls.get("filterSpecie", ""));

  // effects
  useEffect(() => {
    // pedir datos de personajes
    if (characters.length === 0)
      getDataFromApi().then((charactersData) => {
        setCharacters(charactersData);
      });
  });
  // }, []); parámetro que nos indica cuándo se debe ejecutar el useEffect
  // que lo he quitado porque en consola me salía este warning:
  // Line 25:8:  React Hook useEffect has a missing dependency: 'characters.length'.
  // Either include it or remove the dependency array  react-hooks/exhaustive-deps

  // guardamos datos en localstorage
  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  useEffect(() => {
    ls.set("filterName", filterName);
  }, [filterName]);

  useEffect(() => {
    ls.set("filterSpecie", filterSpecie);
  }, [filterSpecie]);

  // useEffect(() => {
  //   ls.set("characters", characters);
  //   ls.set("filterName", filterName);
  //   ls.set("filterSpecie", filterSpecie);
  // }, [characters, filterName, filterSpecie]);

  // event handlers
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "species") {
      setFilterSpecie(data.value);
    }
  };

  //render
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterSpecie === "") {
        return true;
      } else {
        return character.species
          .toLowerCase()
          .includes(filterSpecie.toLowerCase());
      }
    });
  //     return filterSpecie === "" ? true : character.species === filterSpecie ;

  const renderCharacterDetail = (props) => {
    console.log('Router props', props);
    const routeCharacterId = props.character.id;
    const characterFound = characters.find(character => {
      return character.id === routeCharacterId;
    })
    if(characterFound !== undefined) {
      return <CharacterDetail character={characterFound} />;
    } else {
      <p>Personaje no encontrado</p>
    }
  }

  return (
    <>

      <Header />
      <Switch>
        <Route exact path="/">
          <div className="main__container">
            <Filters
              filterName={filterName}
              filterSpecie={filterSpecie}
              handleFilter={handleFilter}
            />
            <CharacterList characters={filteredCharacters} />
          </div>
        </Route>
        <Route exact path="/character/:id" render={renderCharacterDetail}/>
      </Switch>
      <Footer/>
    </>
  );
};

export default App;
