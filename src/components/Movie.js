import React from 'react'


const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

//this will set the different colors to the votes (green, orange, red)
//it add the extra class of (green, orange, red) to each vote depending on the vote number
const setVoteClass = (vote) => {
    if(vote >= 8){
        return "green"
    }else if(vote >= 6){
        return "orange"
    }else{
        return "red"
    }
}

function Movie({title, poster_path, overview, vote_average, release_date}) {

    let date_format = require('dateformat');

    return (
        <div className="movie">
            <img src={poster_path ? (IMAGE_API + poster_path) : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2080&q=80"} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>            
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview</h2>
                <p>{overview}</p>
                <h4>Release Date: {date_format(release_date, "mmmm dS, yyyy")}</h4>
            </div> 
        </div>
    )
}

export default Movie
