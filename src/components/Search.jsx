import React from 'react'
import StarRating from './StarRating'

const Search = ({rating,text,handletext,handlerating}) => {
  return (
    <div>
      <form >
       <label>Search</label> <input type="text" input={text} onChange={e=>handletext(e.target.value)}/>
        <StarRating rating={rating} handlerating={handlerating}/>
      </form>
    </div>
  )
}

export default Search
