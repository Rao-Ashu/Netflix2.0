import React, {useState, useEffect} from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests';

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() =>{
    async function fetchData(){
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
      return response;
    }

    fetchData()
  },[]);

  
  console.log(movie);
  console.log(movie?.overview);  
  
  
  // function truncate(description){
  //   return (description.length > 150 ? `${description.substring(0, 150)}…` : description);
    
  //   // if (description.length > num) {
  //   //       return description.substring(0, num-1) + '...';
  //   // }else{
  //   //   return description;
  //   // }
  // }
  // const movieContent = truncate(movie?.overview);
  
  
  
  return (
    <header className="banner" style={{backgroundSize:"cover", backgroundPosition:"centre centre", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,}}>
      <div className="banner_content">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>

      </div>
      <div className="banner_fadeBottom" />

    </header>
    
  )
}

export default Banner

// truncate("movie?.overview" ,150)