import { useState } from "react";
import Search from "./Search";

function Gifs() {
  const [gifs, setGifs] = useState([]);
  const [errors, setErrors] = useState([]);

  const getGiphy = (input) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=RtcsJKznKWld8mzWNn3f5dQjcrIqImTW&rating=g`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error(res.message);
        }
        return res.json();
      })
      .then((data) => {
        setGifs(data.data);
      })
      .catch((error) => {
        console.error(error.message);
        setErrors(error);
      });
  };

  function handleSearch(input) {
    getGiphy(input);
  }

  return (
    <div className="gif-container">
      <Search onSearch={handleSearch} />
      {gifs.map((gif) => (
        <img src={gif.images.original.url} alt={gif.title} key={gif.id} />
      ))}
    </div>
  );
}

export default Gifs;
