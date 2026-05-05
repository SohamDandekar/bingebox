import React from 'react'
import { CDN_POSTER_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='pr-4 w-40'>
        <img alt='MovieCard' src={CDN_POSTER_URL + posterPath} />
    </div>
  )
}

export default MovieCard