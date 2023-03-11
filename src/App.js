import './App.css';
import { useState } from 'react';
import { dataMovie } from './Data';
import MovieList from './components/MovieList';
import AddNewmovie from'./components/AddNewMovie';
import Search from './components/Search';

function App() {
const [list,setList] = useState(dataMovie)
const handleAdd=(NewMovie)=>setList([...list,NewMovie])
const [text, setText] = useState("")
const [rating, setRating] = useState(1)
// console.log(list)
const handletext=(x)=> setText(x)
const handlerating=(y)=> setRating(y)
  return (
    <div className="App">
      <MovieList data={list.filter(el=>el.title.includes(text))}/>
      <AddNewmovie  handleAdd={handleAdd}/>
      <Search rating={rating} text={text} handletext={handletext} handlerating={handlerating}/>
    </div>
  );
}

export default App;
