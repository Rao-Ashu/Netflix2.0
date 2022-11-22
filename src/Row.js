import React, {useState, useEffect} from 'react';
import './Row.css';
import axios from './axios';

function Row({title, fetchURL, isLargeRow= false}) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() =>{
    async function fetchData(){
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
        return response;
    }
    fetchData();
  },[fetchURL])
  
  console.log(movies);
  
  
    return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
            {movies?.map((movie)=> (
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&(<img
                     className={`row_poster ${isLargeRow && 'row_posterLarger'}`}
                     key={movie.id}
                     src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="{movie?.name}" />
                     )
                    
               
                )
            )}
        </div>
        
        
        
    </div>
    
  )
}

export default Row