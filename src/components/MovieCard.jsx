import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({info}) => {
    // console.log(info)
  return (
    <div className='Moviecard'>
      <h3>{info.title}</h3>
      <p>{info.description}</p>
      <img src={info.posterURL} alt={info.title} />
      <StarRating rating={info.rating}/>

    </div>
  )
}

export default MovieCard
