import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data}) => {
    // console.log(data)
  return (
    <div className='Movielist'>
      {React.Children.toArray(data.map((movie)=><MovieCard info={movie}/>))}
    </div>
  )
}

export default MovieList
