import React from 'react';
import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';


const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName/>
        <FilterBySpecie/>
      </form>
    </section>
  );
};

export default Filters;