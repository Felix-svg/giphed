import { useState } from "react";

function Search({onSearch}) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  function handleInputChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleInputChange} />
        <button>Search</button>
      </form>
    </>
  );
}

export default Search;
