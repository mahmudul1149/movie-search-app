import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(MOVIE_API_URL);
        setMovies(response.data.Search);
        console.log(response);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const search = async (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setLoading(false);
      } else {
        setErrorMessage(response.data.Error);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
