import React from "react";

const IMG_API="https://image.tmdb.org/t/p/w1280";

const setVoteClass=(vote)=>{
    if(vote >= 8){
        return "green"
    }else if(vote >= 6){
        return "orange"
    }else{
        return "red"
    }
}

const Movie=({title,poster_path,overview,vote_average})=>(
    <div className="movie">

        <div className="movie-header">

        <img src={poster_path ? (IMG_API+poster_path) : "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={title}/>

        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>

        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>

        </div>
        
    </div>
)

export default Movie;