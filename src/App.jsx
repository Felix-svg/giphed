import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Gifs from "./Gifs";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/gifs"} element={<Gifs />} />
        </Routes>
        
      </>
      <Footer />
    </Router>
  );
}

export default App;
