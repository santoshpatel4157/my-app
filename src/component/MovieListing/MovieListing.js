import React from 'react';
import { useSelector } from "react-redux";
import { getAllMovies } from "../../feature/movies/movieSlice";
import { MovieCard } from '../MovieCard/MovieCard.js';


const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    console.log(movies);
    let renderMovies = "";

    renderMovies = movies.Response === "True" ? (movies.Search.map((movie, index) =>(<MovieCard key={index} data={movie} />
    ))
    ) : (
    <div className="movies-error">
        <h3>{movies.Error}</h3>
    </div>
    );

    return (
        <div className='movie-wrapper'>
           <div className='movie-list'>
            <h2>movies</h2>
            <div className='movie-container'>
                {/* {renderMovies} */}
            </div>
           </div>
        </div>
    );
};

export default MovieListing;