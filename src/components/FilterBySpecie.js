import React from "react";

const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="specie">
        Filtrar por especie:
      </label>
      <select
        className="form__input--text"
        name="species"
        id="species"
        value={props.filterSpecie}
        onChange={handleChange}
      >
        <option value="">Todos</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecie;
