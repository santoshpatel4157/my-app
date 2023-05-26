import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import MovieApi from "../../common/apis/MovieApi"
import { APIkey } from "../../common/apis/MovieApiKey"
//import axios from 'axios';
//import App from '../../App';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../feature/movies/movieSlice';


const Home = () => {
    const movieText = "car";
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchMovies = async () => {
            const response = await MovieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)

                .catch((err) => {
                    console.log("error ::", err)
                });

                dispatch(addMovies(response.data))

            // console.log("response ::", response)
            //ternary opt for link 

        }
        fetchMovies();
    }, [])
    return (
        <>

            <div className='banner-img'>
                <MovieListing />

            </div>
        </>

    );
};

export default Home;