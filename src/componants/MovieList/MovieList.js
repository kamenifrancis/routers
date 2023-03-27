import React from 'react'
import MovieCard from '../MovieCard'

const MovieList=({movieList})=> {
    console.log(movieList)
  return (
    <div>{
        movieList.map( (el)=><MovieCard  movie={el}/>)
        
        }
        
    
    </div>
  )
}

export default MovieList
