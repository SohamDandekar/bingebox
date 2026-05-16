import React from 'react'
import { CDN_POSTER_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {

  if(!posterPath) return null;

  return (
    <div className='pr-4 md:w-40 w-32'>
        <img alt='MovieCard' src={CDN_POSTER_URL + posterPath} />
    </div>
  )
}

export default MovieCard