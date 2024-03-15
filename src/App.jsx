import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Gifs from "./Gifs";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/explore"} element={<Gifs />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
        
      </>
      <Footer />
    </Router>
  );
}

export default App;
