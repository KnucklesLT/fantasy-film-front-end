import { Link } from 'react-router-dom';
import styles from './MovieResults.module.css'
import MovieCard from "../../components/MovieCard/MovieCard";
import * as movieService from '../../services/movieService'
import * as dreamcastService from '../../services/dreamcastService'
import { useNavigate } from 'react-router-dom';

const MovieResults = ({movies, profile, setProfile}) => {
  const navigate = useNavigate()
  const handleAddToFav = async movie => {
    try {
      const setFavMovie={
        name: `${movie.original_title}`,
        photo: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        tmdbID: `${movie.id}`
      }
      const newMovie = await movieService.create(setFavMovie)
      setProfile({
        ...profile,
        favoriteMovies:[...profile.favoriteMovies,newMovie]
      })
      navigate(`/movie/${newMovie._id}`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDreamCast = async (movie, credits) => {
    try {
      const setDreamCast={
        name: `${movie.original_title}`,
        photo: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        tmdbID: `${movie.id}`,
        cast: [
          {
            character: `${credits[0].character}`,
            actors: `${credits[0].id}`
          },
          {
            character: `${credits[1].character}`,
            actors: `${credits[1].id}`
          },{
            character: `${credits[2].character}`,
            actors: `${credits[2].id}`
          },{
            character: `${credits[3].character}`,
            actors: `${credits[3].id}`
          },{
            character: `${credits[4].character}`,
            actors: `${credits[4].id}`
          },
          {
            character: `${credits[5].character}`,
            actors: `${credits[5].id}`
          },
        ]
      }
      const dreamMovie = await dreamcastService.create(setDreamCast)
      navigate(`/movies/${dreamMovie._id}`)

    } catch (err) {
      console.log(err)
    }
  }

  return ( 
    <main className={styles.container}>
      { movies.length ? 
        movies.map( movie => {
          if (movie.poster_path)
          return (
          
              <MovieCard 
              key={movie.original_title}
              movie={movie} 
              handleAddToFav={handleAddToFav}
              handleDreamCast={handleDreamCast}/> 
            
          )
        })
        :
        <p>Search for Movies to get started</p>
      }
    </main>
  );
}

export default MovieResults