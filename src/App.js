import React,{useEffect,useState} from 'react';
import Movie from './components/Movie';

const FEATURED_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d9e2eda26ce9d82015a9827acd6e64c3&page=1";


const SEARCH_API="https://api.themoviedb.org/3/search/movie?api_key=d9e2eda26ce9d82015a9827acd6e64c3&query=";

const App=()=>{
   const [movies,setMovies]=useState([])
   const [searchTerm,setSearchTerm]=useState("")

   useEffect(()=>{
       getMovies(FEATURED_API)
   },[])

   const getMovies=(API)=>{
    fetch(API)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setMovies(data.results)
    })
   }

   const handleSubmit=(e)=>{
       e.preventDefault()

       if(searchTerm){
        getMovies(SEARCH_API+searchTerm)
 
        setSearchTerm(' ')
       }
   }

    return(
        <>

        <header>
            <form onSubmit={handleSubmit}>
                <input className='search' type="text" placeholder="Search.." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            </form>
            </header>
        <div className='movie-container'>
            
            {movies.length > 0 && movies.map((movie)=>
             <Movie key={movie.id} {...movie}/>
            )}
        </div>

        </>
    )
}

export default App