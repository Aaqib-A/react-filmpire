import React from 'react';
import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg'

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=421abbf5
const API_URL = 'http://www.omdbapi.com?apikey=421abbf5';

const movie1 = {
    "Title": "Avatar: The Way of Water",
    "Year": "2022",
    "imdbID": "tt1630029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);


    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        // console.log(data.Search);
        setMovies(data.Search);
    }
    useEffect( ()=>{
        searchMovies('Avatar');
    })

    return (
        <div className="app">
            <h1>Filmpire</h1>
            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />

                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{}}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className = "container">
                        {/* <MovieCard movie1={movie1} /> */}
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found!</h2>
                    </div>
                )
            }

            {/* 
            <div className = "container">
                {/* <MovieCard movie1={movie1} /> }
                <MovieCard movie1={movies[0]} />
            </div> 
            */}
        </div>
    );
}

export default App;