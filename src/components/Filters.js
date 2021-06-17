import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import FilterByStatus from "./FilterByStatus";

const Filters = (props) => {
  return (
    <section className="section__filters">
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
    </section>
  );
};

export default Filters;
