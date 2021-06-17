import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import FilterByStatus from "./FilterByStatus";

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="section__filters">
    <form className="form" onSubmit={handleForm}>
      <FilterByName
        filterName={props.filterName}
        handleFilter={props.handleFilter}
      />
      <FilterBySpecie
        filterSpecie={props.filterSpecie}
        handleFilter={props.handleFilter}
      />
      <FilterByStatus
        filterStatus={props.filterStatus}
        handleFilter={props.handleFilter}
      />
      </form>
    </section>
  );
};

export default Filters;
