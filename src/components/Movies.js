import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map((movie, index) => (
            <div key={index}>
              <h3>Title: {movie.title}</h3>
              <h3>Genres:</h3>
              <ul>
                {movie.genres.map((movie)=>(
                  <li>{movie}</li>
                ))}
              </ul>
              <p>Time: {movie.time}</p>
              <p>Metascore: {movie.metascore}</p>
            </div>
          )
        )}
    </div>
  );
};

export default Movies;
