import logo from './logo.svg';
import './App.css';
import SearchMovie from './components/SearchMovie'
import DisplayMovies from './components/DisplayMovies'

function App() {
  return (
    <>  
    
    <div className='displayContainer'>
      <h1 className='title'>Movie Search</h1>
            <SearchMovie/>
   
        <DisplayMovies/>
    </div>
    </>
  );
}

export default App;
