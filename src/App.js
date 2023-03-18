import './App.css';
import { useState } from 'react';
import { dataMovie } from './Data';
import MovieList from './components/MovieList';
import AddNewmovie from'./components/AddNewMovie';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Description from './components/Description';
import NavBar from './components/NavBar';


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
    <Router>
    <><NavBar/></>
     <Routes>
      
      <Route path="/Main" element={<div> <AddNewmovie  handleAdd={handleAdd}/>
      <Search rating={rating} text={text} handletext={handletext} handlerating={handlerating}/>
      <MovieList data={list.filter(el=>el.title.includes(text))}/></div>}/>
     <Route path= "/description/:id" element={<Description list={list}/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
