import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

const Description = ({list}) => {
    // console.log(news)
    const {id}=useParams()
    const item=list.find(el=>el.id==id)
  return (
    <div className='descrip'>
    <div>{item.description}</div>
   <div> <ReactPlayer url={item.trailer} className='vid'/></div>
    
    </div>
  )
}

export default Description
