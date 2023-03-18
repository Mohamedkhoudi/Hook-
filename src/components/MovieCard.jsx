import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const MovieCard = ({info}) => {
    // console.log(info)
  return (
    <div className='Moviecard'>
     <Link to={`/description/${info.id}`}>
      <h3>{info.title}</h3>
      <p>{info.description}</p>
      <img src={info.posterURL} alt={info.title} />
      <StarRating rating={info.rating}/>
      </Link>
    </div>
  )
}

export default MovieCard
