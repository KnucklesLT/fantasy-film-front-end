import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ActorList from "../../components/ActorList/ActorList"
import styles from './MovieDetails.module.css'


// Services
import * as dreamcastService from "../../services/dreamcastService"
import * as actorService from "../../services/actorService"


const MovieDetails = ({ profile, setProfile }) => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [actors, setActors] = useState([])
  const [selectedCast, setSelectedCast] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMovie = async () => {
      const moviedata = await dreamcastService.show(id)
      setMovie(moviedata)
    }
    fetchMovie()
  }, [id])

  useEffect(() => {
    const fetchActors = async () => {
      const actorData = await actorService.index()
      setActors(actorData)
    }
    fetchActors()
  }, [id])

  const handleDeleteDreamcast = async movieid => {
    try {

      await dreamcastService.deleteDreamcast(movieid)
      setProfile({
        ...profile,
        dreamCast: profile.dreamCast.filter(dreamCast => {
          return dreamCast._id !== movieid
        })
      })
      navigate('/movie-search')
    } catch (error) {
      console.log(error)
    }
  }

  const replaceActor = async (actor) => {
    const res = await dreamcastService.update(movie._id, selectedCast._id, actor)
    setMovie(res)
    setSelectedCast(null)
  }

  if (!movie) return <h1>Loading...</h1>


  return (
    <main className={styles.container}>
      <section className="card" style={{ 'width': '35rem' }}>
      <h1>Replace cast members to create your Dreamcast!</h1>
        <img src={`${movie.image}`} className="card-img-top" alt={`${movie.name}`} style={{ 'width': '35rem', 'height': '50rem' }} />
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
          {movie.cast?.map(cast => (
            <div 
            key={cast._id} 
            className={styles.cast} 
            id={cast._id === selectedCast?._id ? styles.selected : ''}
            >
              <p key={cast._id} className="card-text">{cast.character} : {cast.actor?.name}</p><br />
              {!selectedCast &&
              <button className="btn btn-danger" onClick={() => setSelectedCast(cast)}>Replace</button>}
            </div>
          ))}
        </div>
        <button
          onClick={() => handleDeleteDreamcast(movie._id)}
          className="btn btn-danger mt-auto"
          >
          Delete this DreamCast
        </button>
      </section>
      <ActorList replaceActor={replaceActor} selectedCast={selectedCast} actors={actors}/>
<div></div>
    </main>
  )
}

export default MovieDetails