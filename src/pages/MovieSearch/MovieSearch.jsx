import { useState } from 'react'
import styles from './MovieSearch.module.css'
import * as movieService from '../../services/movieService'
import MovieResults from '../../components/MovieResults/MovieResults'

const MovieSearch = (profile, setProfile) => {

  const [formData, setFormData] = useState({
    movieSearch: ''
  })

  const [results, setResults] = useState([])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const resultData = await movieService.search(formData)
      setResults(resultData)
    } catch (err) {
      console.log(err)
    }
  } 

  return (  
    <main className={styles.main}>
    <>
    <h1>Movie Search</h1>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
      >
      <div className={styles.inputContainer}>
        <input
          type="text"
          autoComplete="off"
          placeholder='Search for a movie...'
          id="movie-search"
          value={formData.movieSearch}
          name="movieSearch"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="btn btn-primary">Search</button>
      </div>
    </form>
      <MovieResults profile={profile} setProfile={setProfile} movies={results}/>
    </>
  </main>
  );
}

export default MovieSearch;