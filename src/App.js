import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMoviesRequest = async () => {
    const response = await fetch('http://www.omdbapi.com/?s=when&apikey=2821e511');
    const data = await response.json();
    setMovies(data.Search);
    // console.log(data.Search);
  }

  useEffect(() => {
    getMoviesRequest();
  }, [])


  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center justify-content-between">
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies={movies} /> 
      </div>
    </div>
  );
}

export default App;
