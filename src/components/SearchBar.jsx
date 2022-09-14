const SearchBar = (props) => {
  const searchItems = (e) => {
    e.preventDefault();
    const lowerCase = e.target.value.toLowerCase();
    props.setInputSearch(lowerCase);
    if (lowerCase) {
      const filteredResults = props.info.filter((element) => {
        return element.name.toLowerCase().includes(lowerCase);
      });
      if (filteredResults.length === 0) {
        props.setError(
          "No hay resultados en su búsqueda. Por favor, intente de nuevo"
        );
      } else {
        props.setError("");
      }
      props.setFilteredInfo(filteredResults);
    } else {
      props.setFilteredInfo(props.info);
    }
  };
  return (
    <input
      type="text"
      placeholder="Search breed name"
      value={props.inputSearch}
      onChange={searchItems}
      className="form-control m-2"
    />
  );
};
export default SearchBar;
