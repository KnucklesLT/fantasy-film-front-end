import styles from './MovieResults.module.css'
import MovieCard from "../../components/MovieCard/MovieCard";
import * as movieService from '../../services/movieService'
import * as dreamcastService from '../../services/dreamcastService'
import { useNavigate } from 'react-router-dom';

const MovieResults = ({movies, profile, setProfile}) => {

  const tmdbIDs = profile?.favoriteMovies.map(m => m.tmdbID)
  const navigate = useNavigate()
  const handleAddToFav = async (movie, credits) => {
    try {
      const setFavMovie={
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
      const newMovie = await movieService.create(setFavMovie)
      setProfile({
        ...profile,
        favoriteMovies:[...profile.favoriteMovies,newMovie]
      })
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

  const handleDeleteFromFav = async movie => {
    try {
      const deleteFavMovie ={
        tmdbID: `${movie.id}`
      }
      await movieService.deleteFav(deleteFavMovie)
      setProfile({
        ...profile,
        favoriteMovies: profile.favoriteMovies.filter(m => {
          return m.tmdbID !== movie.id
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  if(!movies) return <h1>Loading Movies...</h1>
  return ( 
    <main className={styles.container}>
      { movies.length ? 
        movies.map(movie => (
            movie.poster_path &&
              <MovieCard 
              key={movie.id}
              movie={movie} 
              favMovie={tmdbIDs}
              handleAddToFav={handleAddToFav}
              handleDeleteFromFav={handleDeleteFromFav}
              handleDreamCast={handleDreamCast}/> 
        ))
        :
        <p></p>
      }
    </main>
  );
}

export default MovieResults