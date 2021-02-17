import React from 'react';
import AddFavourites from './AddFavourites';


const MovieList = (props) => {
  const MoveFavouritesComponent = props.moveFavourites;
  return (
    <>
      {props.movies.map( (movie) => (
        <div className="m-3 images-container d-flex ">
          <img src={movie.Poster} alt="poster" className=""/>
          <div className="overlay p-3 text-center" onClick={() => props.handleFavouritesClick(movie)}>
            <MoveFavouritesComponent />
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieList;