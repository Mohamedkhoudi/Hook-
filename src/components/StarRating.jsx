import React from 'react'

const StarRating = ({rating,handlerating}) => {
    const stars=(rating)=>{
    var tab=[]
    for(let i =1; i<=5 ; i++){
      i<=rating?tab.push(<span style={{color: 'gold'}} onClick={()=>handlerating(i)}>★</span>):tab.push(<span style={{color: 'silver'}} onClick={()=>handlerating(i)} >★</span>)
    }
    return tab
    }
  return (
    <div>
      {React.Children.toArray(stars(rating))}
    </div>
  )
}

export default StarRating
