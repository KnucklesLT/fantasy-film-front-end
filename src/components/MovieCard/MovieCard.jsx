import { useState } from "react";
import Cast from "../Cast/Cast";

import { useNavigate } from "react-router-dom";



const MovieCard = ({ movie, handleAddToFav, handleDreamCast, favMovie, handleDeleteFromFav }) => {

  const isFavoriteMovie = favMovie?.includes(movie.id)
  const [credits, setCredits] = useState([])
  const navigate = useNavigate()
  return (
    <div className="card" style={{ width: "24rem" }}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className="card-body">
        <h3 className="card-title">{movie.original_title}</h3>
        <p className="card-text">{movie.overview}</p>
        <p>Cast:</p>
        <ul>
          <Cast key={movie.id} movieId={movie.id} credits={credits} setCredits={setCredits} />
        </ul>
        {isFavoriteMovie 
          ? 
          <button 
            className='btn btn-danger mt-auto'
            onClick={()=> handleDeleteFromFav(movie,credits)}
            
          >
            Delete from Favorite
          </button>
          :
          <button 
            className='btn btn-primary mt-auto'
            onClick={()=> handleAddToFav(movie,credits)}
          >
            Add to Favorite
          </button>
        }
        <button 
          className="btn btn-primary mt-auto"
          onClick={() => {
            handleDreamCast(movie,credits)
            
          }}
          >
        Create DreamCast
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
