import React from 'react'

const MovieList = (props) => {
  return (
    <>
      {props.movies.map( (movie) => (
        <div className="m-3">
          <img src={movie.Poster} alt="poster"/>
        </div>
      ))}
    </>
  )
}

export default MovieList;