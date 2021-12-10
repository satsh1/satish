import React, {Component}from "react";
export const MoviesProvider=React.createContext()
class Moviescontext extends React.Component {

    constructor(){
        super();
        this.state={
                   movies:[],
                   addmovie:this.addmovie
        }
    }

    addmovie=(movie)=>{
        this.setState({movies:[...this.state.movies,movie]})
    }
    render() { 
        return <MoviesProvider.Provider value={{...this.state}}>

       {this.props.children }
        </MoviesProvider.Provider>
    }
}
 
export default Moviescontext;