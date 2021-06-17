import React from "react";
import "../stylesheets/Filters.scss";

const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "status",
      value: ev.target.value,
    });
  };

  // const handleForm = (ev) => {
  //   ev.preventDefault();
  // };

  return (
    // <form onSubmit={handleForm}>
    <>
      <label className="form__label" htmlFor="status">
        
      </label>
      <select
        className="form__input--select"
        name="status"
        id="status"
        value={props.filterStatus}
        onChange={handleChange}
      >
        <option value="">Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      </>
  );
};

export default FilterByStatus;
