import SortBy from "../components/SortBy";
import SearchBar from "../components/SearchBar";

function Menu(props) {
  return (
    <div className="searchbar bg-secondary container-fluid p-3">
      <div className="row justify-content-evenly">
        <div className="col-lg-2">
          <SearchBar
            setFilteredInfo={props.setFilteredInfo}
            info={props.info}
            inputSearch={props.inputSearch}
            setInputSearch={props.setInputSearch}
            setError={props.setError}
          />
        </div>
        <div className="col-lg-2">
          <SortBy setSortState={props.setSortState} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
