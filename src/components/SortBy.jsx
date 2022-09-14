const SortBy = (props) => {
  const handleSort = (e) => {
    e.preventDefault();
    props.setSortState(e.target.value);
  };
  return (
    <select
      onChange={handleSort}
      defaultValue={"none"}
      className="form-select p-2 m-2"
    >
      <option value="none" disabled>
        Sort by
      </option>
      <option value="name-az">Name A-Z</option>
      <option value="name-za">Name Z-A</option>
      <option value="height-desc">Tallest to Shortest</option>
      <option value="height-asc">Shortest to Tallest</option>
    </select>
  );
};
export default SortBy;
