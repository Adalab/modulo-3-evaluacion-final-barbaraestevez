
const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };

  return (
    <>
      <label className="form__label" htmlFor="name">
      </label>
      <input
        className="form__input--text"
        id="name"
        name="name"
        type="text"
        placeholder="Busca tu personaje..."
        value={props.filterName}
        onChange={handleChange}
      />
   </>
  );
};

export default FilterByName;
