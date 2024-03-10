import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      {/* <h1>Home Page</h1> */}
      <button>
        <Link to={"/gifs"}>Explore GIPHYS</Link>
      </button>
    </div>
  );
}

export default Home;
