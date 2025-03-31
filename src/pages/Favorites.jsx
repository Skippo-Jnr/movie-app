import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favourites</h2>
        <div className="movies-grid">
          {favorites.map(
            (movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ) // this renders the movies when it starts with the search query
          )}
        </div>
      </div>
    );
  }
  // if there are no favorites, show this message
  return (
    <div className="favorites-empty">
      <h2>No Favourites Movies Yet</h2>
      <p>Start adding movies too your favourites and they will appear here</p>
    </div>
  );
}

export default Favorite;
