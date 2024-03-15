import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <p>Hi there! This is Giphed. <br />Explore a wide variety of GIFS from the internet</p>
      <button>
        <Link to={"/explore"}>Explore GIPHYS</Link>
      </button>
    </div>
  );
}

export default Home;
