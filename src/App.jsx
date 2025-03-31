import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import { MovieProvider } from "./context/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/* displays the Home Page element  when we use '/'  */}
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  );
}

export default App;
