import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LANGUAGE_TEXTS } from '../utils/languageConstants';
import { toggleLanguage } from '../utils/languageSlice';
import client from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { storeGptMoviesInfo } from '../utils/gptSlice';

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const selectedLanguage = useSelector(store => store.lang.language);
  const searchText = useRef(null);

  useEffect(() => {
    //Set default language to English on initial render
    dispatch(toggleLanguage("en"));
  }, []);

  const fetchGptSearchMovies = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearch = async () => {
    //Make API call to OPEN AI
    const gptResults = await client.responses.create({
      model: 'gpt-4.1-mini',
      instructions: 'You are a movie recommendation system that suggests 5 movie names based on the input as comma separated values. For example: Andhadhun, Talaash, Drishyam, Kahaani, Badla',
      input: searchText.current.value,
    });

    if(!gptResults.output_text){
      //TODO: Write Error Handling
      //multiple clicks of search prevent
    }

    const gptMovies = gptResults?.output_text.split(",");

    const promiseArray = gptMovies.map((movie) => fetchGptSearchMovies(movie));

    const gptMovieResults = await Promise.all(promiseArray);

    dispatch(storeGptMoviesInfo({movieNames: gptMovies, movieResults: gptMovieResults}));
  }

  return (
    <div className='md:pt-[12%] pt-[40%] flex justify-center'>
        <form className='bg-black md:w-3/5 w-full grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type='text' className='text-sm md:text-md col-span-9 m-4 p-4 rounded-lg' placeholder={LANGUAGE_TEXTS[selectedLanguage].placeHolderText} />
            <button onClick={handleGptSearch} className='py-2 px-4 col-span-3 m-4 bg-blue-800 text-white rounded-lg'>{LANGUAGE_TEXTS[selectedLanguage].searchButtonText}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;