
const FilterByOrigin = (props) => {
    const handleChange = (ev) => {
      props.handleFilter({
        key: "origin",
        value: ev.target.value,
      });
    };
  
    return (
      <>
        <label className="form__label" htmlFor="origin">
        </label>
        <input
          className="form__input--text"
          id="origin"
          name="origin"
          type="text"
          placeholder="Busca su origen..."
          value={props.filterName}
          onChange={handleChange}
        />
     </>
    );
  };
  
  export default FilterByOrigin;
  