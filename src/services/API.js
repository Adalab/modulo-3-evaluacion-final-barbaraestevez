const getDataFromApi = () => {
    // obtengo los datos del api
    // in case we've been banned use this json --> https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json
    return fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
      // recorro el array, cojo los datos que me interesan y lo guardo en otro arrya (cleanData)
        const cleanData = data.results.map((character) => {
            return {
              image: character.image,
              name: character.name,
              species: character.species,
              id: character.id,
          //  gender: character.gender,
          //  status: character.status,
            };
          });
          return cleanData;
      });
  };
  
  export default getDataFromApi;