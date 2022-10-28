import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// components
// import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

import styles from "./DreamcastList.module.css"

// Services
import * as dreamcastService from "../../services/dreamcastService.js"

const DreamcastDetails = ({user}) => {
  const { id } = useParams()
  const [dreamcasts, setDreamcasts] = useState([])

  useEffect(() => {
    const fetchDreamcast = async () => {
      const allDreamCasts = await dreamcastService.index()
      setDreamcasts(allDreamCasts)
    }
    fetchDreamcast()
  }, [])
  if (!dreamcasts) return <h1>Loading...</h1>

  return (
    <>
      <h1>Our User Created Dreamcast</h1>
      <section className={styles.container}>
        {dreamcasts.map(dreamcast => (
          <div key={dreamcast._id} className="card" style={{ "width": "35rem" }}>
            <img src={`${dreamcast.image}`} className="card-img-top" alt={`${dreamcast.name}`} style={{ 'width': '35rem', 'height': '50rem' }} />
            <div className="card-body">
              <h2 className="card-title">{dreamcast.name}</h2>
              {dreamcast.cast?.map(cast => (
                <div
                  key={cast._id}
                >
                  <p key={cast._id} className="card-text">{cast.character} : {cast.actor?.name}</p>
                </div>
              ))}
            </div>
            {user.profile === dreamcast.author && <Link to={`/movies/${dreamcast._id}`}><button className="btn btn-success">View Details</button></Link>}
            
          </div>
        ))}
      </section>
    </>

  )
}

export default DreamcastDetails