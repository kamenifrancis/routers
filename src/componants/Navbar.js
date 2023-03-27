import React from 'react'
import './Navbar.css' 
import {Link } from 'react-router-dom'
const  Navbar=()=> {
  return (
    <div>
      
<ul>
  <li><a><Link to='/'>Home</Link></a></li>
  <li><a ><Link to='/addMovie'>Add movie</Link></a></li>
  <li style={{float:"right"}}><a className="active" ><Link to='/movieList'>Movie list</Link></a></li>
  
</ul>
    </div>
  )
}

export default Navbar
