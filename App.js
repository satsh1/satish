import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Addmovie from './Addmovie';
import Movielist from './Movielist';
import Moviescontext from './Moviescontext';

function App() {
  return (
    <div className="App">

      <Moviescontext>
      <Navbar/>
      <Addmovie/>
     
     <Movielist/>
     
      </Moviescontext>
      
    </div>
  );
}

export default App;
