import React ,{useContext}from 'react'
import { MoviesProvider } from './Moviescontext'

function Navbar() {

    const obj=useContext(MoviesProvider)

    return<div style={{backgroundColor:'yellow'}}>
        <h1>the Total Movie count:{obj.movies.length}</h1>
    </div>
}

export default Navbar