import React, { useState,useContext} from 'react'
import { MoviesProvider } from './Moviescontext'
function Addmovie() {
    const[moviename,setMoviename]=useState("")
    const[directorname,setDirectorname]=useState("")

    const obj = useContext(MoviesProvider)

    function add() {
        var movie={
             moviename:moviename,
             directorname:directorname
             
        }
        obj.addmovie(movie)
    }

     
    return<div style={{backgroundColor:'blue'}}>
        <h1> Addmovie</h1>
        <input type="text" placeholder="Moviename" value={moviename} onChange={(e)=>{setMoviename(e.target.value)}}></input><br/><br/>
        <input type="text" placeholder="Directorname" value={directorname} onChange={(e)=>{setDirectorname(e.target.value)}}></input><br/><br/>


        <button onClick={add}>Add Movie</button>

    </div>
}

export default Addmovie;