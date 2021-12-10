import React,{useContext} from 'react'
import { MoviesProvider } from './Moviescontext'
function Movielist() {
 const obj = useContext(MoviesProvider)

 const Movielist=obj.movies.map((movie)=>{
          return<div>
                <h1 >{movie.moviename}</h1>
                 <h4>Directed by {movie.directorname}</h4>
          </div>

                
 })

    return<div style={{backgroundColor:'green'}}>
        <h1>This is Movielist</h1>
        {Movielist}
    </div>
}

export default Movielist