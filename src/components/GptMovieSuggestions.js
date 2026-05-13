import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {

  const {movieNames, movieResults} = useSelector(store => store.gpt);

  if(!movieNames) return null;

  return (
    <div className='bg-black text-white opacity-80 p-4 m-4'>
      <div>
        {movieNames.map((movie, index) => 
        <div key={movie}>
          <MovieList title={movie} movies={movieResults[index]}/>
        </div>)}
      </div>
    </div>
  )
}

export default GptMovieSuggestions;