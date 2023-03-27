import React from 'react'
import { useParams } from 'react-router' 
import { moviesData } from '../Data' 
import './trailler.css' 
const Trailler = () => {
    const {id}= useParams() 
    console.log('id de ton movie', id)
    const foundMovie= moviesData.find( (el)=>el.id ===Number (id) )
    console.log('movie object selon id', foundMovie)
  return (
    <div>
 <article className="card">
  <img
   className="card__background"
    src={foundMovie.image}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">Colombia</h2>
      <p className="card__description">
     {foundMovie.description}
      </p>
    </div>
    <button className="card__button">{foundMovie.name}</button>
  </div>
</article>
</div>
    
  )
}

export default Trailler

