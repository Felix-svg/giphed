import { useState, useEffect } from "react";
import Search from "./assets/Search";

function Gifs() {
  const [gifs, setGifs] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=RtcsJKznKWld8mzWNn3f5dQjcrIqImTW&rating=g"
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
  }, []);

  return (
    <div className="gif-container">
      {/* {errors && <h1>{errors.message}</h1>} */}
      {gifs.length === 0 && <span>Loading...</span>}
      <Search />
      {gifs.map((gif) => (
        <img src={gif.images.original.url} alt={gif.title} key={gif.id} />
      ))}
    </div>
  );
}

export default Gifs;
