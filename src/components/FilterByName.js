import "../stylesheets/Filters.scss";
const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleForm}>
      <label className="form__label" htmlFor="name">
        Filtro por nombre
      </label>
      <input
        className="form__input--text"
        id="name"
        name="name"
        type="text"
        value={props.filterName}
        onChange={handleChange}
      />
      </form>
  );
};

export default FilterByName;
