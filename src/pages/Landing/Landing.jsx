import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <h2>Welcome to Filmingo Fantasy Filmmaking</h2>
        <h5>Click on <Link to="/movie-search">Movie Search</Link> to start making movie magic!</h5>
          <div className={styles.titleDiv}>
            <img src="https://i.postimg.cc/Tw0qXjpJ/ALG-Movie-Magic-Drop-Shadow-1.png" alt="flamingo" />
          </div>
      </main>
    </>
  )
}

export default Landing