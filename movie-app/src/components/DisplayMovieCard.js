import React from 'react'



export default function DisplayMovieCard({movie}){
  


    return (
        <div className="display" >
        <img className="display--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
            />
        <div className='display--content'>
         <h3 className='display--title'> {movie.title}</h3>
         <p><small>{movie.vote_average}</small></p>
        </div>
        <div className='movie-over'>
             <h2 className='desc'>Overview :</h2>
         <p className='desc'> {movie.overview}</p>
         </div>

    </div>
    )
}