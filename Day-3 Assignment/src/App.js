import { useState, useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
// https://omdbapi.com/?t=the avengers&apikey=4e18d181

import "./App.css";
import Poster from "./Components/Poster/Poster";
import Description from "./Components/Description/Description";

function App() {
  const [movieInfo, setMovieInfo] = useState("");
  const [title, setTitle] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    movieData();
  }, []);

  const movieData = () => {
    ref.current.continuousStart();
    fetch(`https://omdbapi.com/?t=${title}&apikey=4e18d181`)
      .then((res) => {
        return res.json();
      })
      .then((movie) => {
        console.log(movie);
        setMovieInfo(movie);

        ref.current.complete();
      })
      .catch((err) => console.log(err));
  };

  const onSearch = (title) => {
    setTitle(title);
  };

  let movie = null;
  if (movieInfo.Response === "False" || movieInfo.Title === undefined) {
    movie = movie = <h1>Please Search a Movie</h1>;
  } else {
    movie = (
      <div className="Main">
        <Poster image={movieInfo?.Poster} />
        <Description
          title={movieInfo?.Title}
          actors={movieInfo?.Actors}
          director={movieInfo?.Director}
          boxoffice={movieInfo?.BoxOffice}
          languages={movieInfo?.Language}
          plot={movieInfo?.Plot}
          year={movieInfo?.Year}
          production={movieInfo?.Production}
          ratings={movieInfo?.Ratings}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <LoadingBar color="#ff8800" ref={ref} />
      <div className="Header">
        <p>
          <strong>React Movies</strong>
        </p>
        <div className="Search">
          <input type="search" placeholder="Enter Movie Name" onChange={(event) => onSearch(event.target.value)} />
        </div>
        <button onClick={movieData}>
          <img alt="search-icon" src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
        </button>
      </div>
      {movie}
    </div>
  );
}

export default App;
