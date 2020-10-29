import React , {useEffect, useState} from 'react'
import axios from 'axios'
import DisplayMovieCard from './DisplayMovieCard'



export default function DisplayMovies(){
  const [action , SetAction] = useState([])
  const [comedy , SetComedy] = useState([])
  const [drama , SetDrama] = useState([])
  const [fantasy , SetFantasy] = useState([])



    useEffect( () => {
        const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=a7bcc65c2607d5c3dfc289207a205269&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`; 

        const comedyUrl = `https://api.themoviedb.org/3/discover/movie?api_key=a7bcc65c2607d5c3dfc289207a205269&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`; 

        const dramaUrl = `https://api.themoviedb.org/3/discover/movie?api_key=a7bcc65c2607d5c3dfc289207a205269&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`;

        const fantasyUrl = `https://api.themoviedb.org/3/discover/movie?api_key=a7bcc65c2607d5c3dfc289207a205269&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14`;

        axios.get(actionUrl)
        .then( res => {
            SetAction(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
        
        axios.get(comedyUrl)
        .then( res => {
            SetComedy(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })

        axios.get(dramaUrl)
        .then( res => {
            SetDrama(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
        axios.get(fantasyUrl)
        .then( res => {
            SetFantasy(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    
    },[])

    console.log(fantasy)


    return (
        <div>
         <h2 className='displayTitle'>Action Genre</h2>
           <div className="display-list">
            {/* <div className='titleContainer'>
           <h2 className='displayTitle'>Action Genre</h2>
           </div> */}
                {action.slice(2,8).filter(movie => movie.poster_path).map(movie => (
                    <DisplayMovieCard movie={movie} key={movie.id} />
                ))}
            </div> 
            <h2 className='displayTitle'>Comedy Genre</h2>
            <div className="display-list">
                {comedy.slice(2,8).filter(movie => movie.poster_path).map(movie => (
                    <DisplayMovieCard movie={movie} key={movie.id} />
                ))}
            </div> 
            <h2 className='displayTitle'>Drama Genre</h2>
            <div className="display-list">
                
                {drama.slice(2,8).filter(movie => movie.poster_path).map(movie => (
                    <DisplayMovieCard movie={movie} key={movie.id} />
                ))}
            </div> 
            <h2 className='displayTitle'>Fantasy Genre</h2>
            <div className="display-list">
                {fantasy.slice(2,8).filter(movie => movie.poster_path).map(movie => (
                    <DisplayMovieCard movie={movie} key={movie.id} />
                ))}
            </div> 


        </div>
    )
}