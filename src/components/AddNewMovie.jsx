import React, { useState } from 'react';
import Modal from 'react-modal';
import StarRating from './StarRating';

const AddNewmovie = ({handleAdd}) => {
const [title, setTitle] = useState("")   ;
const [posterURL, setPosterURL] = useState("");
const [description, setDescription] = useState("")
const [rating, setRating] = useState(1)
const handlerating=(x)=> setRating(x)
const handleSubmit=(e)=>{
  e.preventDefault()
  const film={id:Math.random,title,description,posterURL,rating}
  handleAdd(film)
}

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#root');

      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }   
      function closeModal() {
        setIsOpen(false);}
  return (
    <div>
       <button onClick={openModal} style={{color:"red"}}>Add</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
    <form onSubmit={handleSubmit}>
<label >Movie Name</label>
<input type="text" value={title} onChange={e=> setTitle(e.target.value)}/>
<label>Movie poster</label>
<input type="text" value={posterURL} onChange={e=> setPosterURL(e.target.value)}/>
<label >Description</label>
<input type="text" value={description} onChange={e=> setDescription(e.target.value)}/>
<StarRating rating={rating} handlerating={handlerating}/>
{/* <input type="text" value={rating} onChange={e=> setRating(e.target.value)}/> */}
<div>
  <button type='submit'>Confirm</button>
  <button onClick={closeModal}>Cancel</button>
</div>

    </form>
      </Modal>
    </div>
  )
  }

export default AddNewmovie
