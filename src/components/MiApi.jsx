import Menu from "../components/Menu"
import Cards from "../components/Card";
import React from "react";

const MiApi = () => {
    const [info, setInfo] = React.useState([]);
    const [filteredInfo, setFilteredInfo] = React.useState([]);
    const [sortState, setSortState] = React.useState("none")
    const [inputSearch, setInputSearch] = React.useState("");
    const [error, setError] = React.useState(null)
    React.useEffect(() => {
        queryInfo();
      }, []);
      const queryInfo = async () => {
        try {
          const apiKey = "live_u2MV7cNZxWSqlg5oCW4bXlM6f1vg2USJ300om2k5TKF2xqL7FwIXFc00iLDaHilT"
          const url = `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`;
          const response = await fetch(url);
          const data = await response.json();
          setInfo(data);
        } catch (error) {
          console.log(error)
        }
    };
    return(
    <>
    <Menu
    inputSearch={inputSearch}
    setInputSearch={setInputSearch}
    info={info}
    setInfo={setInfo}
    filteredInfo={filteredInfo}
    setFilteredInfo={setFilteredInfo}
    setError={setError}
    setSortState={setSortState}
     />
    <Cards
      filteredInfo={filteredInfo}
      info={info}
      inputSearch={inputSearch}
      error={error}
      sortState={sortState}
    />
    </>
    )
}
export default MiApi;