import { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState([[]]);

  function handleSearch() {
    setSearch;
  }
  return (
    <>
      <input type="text" />
      <button>Search</button>
    </>
  );
}

export default Search;
