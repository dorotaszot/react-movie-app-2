import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddToFavourites from './components/AddFavourites';
import RemoveFromFavourites from './components/RemoveFromFavourites';



function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMoviesRequest = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=2821e511`);
    const data = await response.json();
    if(data.Search) {
      setMovies(data.Search);
    }
    
    // console.log(data.Search);
  }

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue])

  const addMoviesToFavourites = (movie) => {
    const newFavouritesArr = [...favourites, movie];
    setFavourites(newFavouritesArr);
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center   justify-content-between">
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies={movies} handleFavouritesClick={addMoviesToFavourites} moveFavourites={AddToFavourites}/> 
      </div>
      <div className="row d-flex align-items-center justify-content-between">
        <MovieListHeading heading='Favourites' />
        </div>
        <div className="row">
          <MovieList movies={favourites} handleFavouritesClick={addMoviesToFavourites} moveFavourites={RemoveFromFavourites} /> 
      </div>
    </div>
  );
}

export default App;
