import React, {useState} from 'react';
import MovieCard from './MovieCard'
import DisplayMovieCard from './DisplayMovieCard'


export default function SearchMovie(){
const [query , setQuery] = useState('')
const [movies , SetMovies] = useState([])

    // states input query

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log('submitting')

        const url = `https://api.themoviedb.org/3/search/movie?api_key=a7bcc65c2607d5c3dfc289207a205269&language=en-US&query=${query}&page=1&include_adult=false`; 

        try {

            const res = await fetch(url)
            const data = await res.json()
            SetMovies(data.results)

        }catch(err){
            console.log(err);
        }
    
    }
   


    return (
        <>
        <form className='form' onSubmit={searchMovies}>
            <label className='label' htmlFor='query' > Movie Name</label>
            <input className='input' type='text' name='query' placeholder='i.e Jurrassic Park'
            value={query}
            onChange={(e) => setQuery(e.target.value)}/>
            <button className='button' type='submit'> Search</button>
        </form>
        <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <DisplayMovieCard movie={movie} key={movie.id} />
                ))}
            </div> 
        </>
    )
}



