import React from 'react'
import './cards.css' 
import { Link } from 'react-router-dom'
function MovieCard(movie) {
  return (
    <div>
      <a  alt="movieCard image" >
  <div className="card">
    <div className="wrapper">
      <img src={movie.image}  className="cover-image" />
    </div>
    <img src={movie.image} className="title" />rider-cover.jpg
    <img src={movie.image} className="character" />
  </div>
</a>

<a alt="movieCard image" >
  <div className="card">
    <div className="wrapper">
      <img src={movie.image} alt="movieCard " className="cover-image" />
    </div>
    <img src={movie.image} alt="movieCard " className="title" />
    <img src={movie.image} alt="movieCard " className="character" />
  </div>
</a>  
<div>
    <h3>{movie.name}</h3> 
</div>
<div>
    <h3>{movie.description}</h3> 
</div>
<div>
    <h3>{movie.date}</h3> 
</div> 
<div>
    <h3>{movie.rating}</h3> 
</div> 
<button><Link to = {`/movieTrailler/ ${movie.id}`}>go to trailler</Link></button>
    </div>
  )
}

export default MovieCard
