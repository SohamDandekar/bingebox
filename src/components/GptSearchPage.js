import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import background from "../assets/BingeBox_Background.png";
const GptSearchPage = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={background} alt="bg-image"/>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage