import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// components
// import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

import styles from "./DreamcastList.module.css"

// Services
import * as dreamcastService from "../../services/dreamcastService.js"

const DreamcastDetails = (props) => {
  const { id } = useParams()
  const [dreamcasts, setDreamcasts] = useState([])

  useEffect(() => {
    const fetchDreamcast = async () => {
      const allDreamCasts = await dreamcastService.index()
      setDreamcasts(allDreamCasts)
    }
    fetchDreamcast()
  }, [])
  // if (!dreamcast) return <Loading />

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
          </div>
        ))}
      </section>
    </>

  )
}

export default DreamcastDetails