import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './MovieDetails.module.css'


// Services
import * as dreamcastService from "../../services/dreamcastService"

const MovieDetails = ({profile}) => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    const fetchMovie = async () => {
      const moviedata = await dreamcastService.show(id)
      setMovie(moviedata)
    }
    fetchMovie()
  },[id])

  if(!movie) return <h1>Loading...</h1>

  return (
    <>
      <h1>Movies</h1>
    <main className={styles.container}>
      <div className="card" style={{'width': '35rem'}}>
        <img src={`${movie.image}`} className="card-img-top" alt={`${movie.name}`} style={{'width': '35rem', 'height': '50rem'}}/>
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
          {movie.cast?.map(cast =>(
            <p  key={cast._id} className="card-text">{cast.character} : {cast.actor?.name}</p>
          ))}
        </div>
      </div>
    </main>
    </>
  )
}

export default MovieDetails