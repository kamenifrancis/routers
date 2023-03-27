
import './App.css';
import HomePage from './componants/HomePage';
import MovieList from './componants/MovieList/MovieList';
import Navbar from './componants/Navbar';
import {Routes, Route} from 'react-router-dom' 
import AddMovie from './componants/AddMovie';
import { useState } from 'react';
import Trailler from './componants/Trailler';
//importation de fake data
import { moviesData } from './Data'
const App=()=> { 
  const [movieList,setMovieList] = useState(moviesData)
  return (
    <div > 
      <h1 className='movie' >MOVIE AAPP</h1> 
      <Navbar/>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/movieList' element= {<MovieList movieList= {movieList}/>}/> 
        <Route path='/addMovie' element= {< AddMovie/>}/>
        <Route path='/movieTrailler:id' element= {< Trailler/>}/>
      </Routes>
      
  <HomePage/>
    <MovieList/> 
    </div>
  );
}

export default App;
