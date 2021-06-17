import React from "react";
import "../stylesheets/Filters.scss";

const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  // const handleForm = (ev) => {
  //   ev.preventDefault();
  // };
  return (
    // <form onSubmit={handleForm}>
    <>
      <label className="form__label" htmlFor="specie">
       </label>
      <select
        className="form__input--select"
        name="species"
        id="species"
        value={props.filterSpecie}
        onChange={handleChange}
      >
        <option value="">Especie</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecie;
