import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className='actor'>
      <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <div key={index}>
              <h3>Name: {actor.name}</h3>
              <h3>Movies:</h3>
              <ul>
                {actor.movies.map((movie)=>(
                  <li>{movie}</li>
                ))}
              </ul>
            </div>
          )
        )}
    </div>
  );
};

export default Actors;
