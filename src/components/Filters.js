import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterBySpecie
          filterSpecie={props.filterSpecie}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
