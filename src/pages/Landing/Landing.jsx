import styles from './Landing.module.css'


const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <h2>Welcome to Fantasy Filmmaking</h2>
        <h5>Click on <a href="http://localhost:3000/movie-search">Movie Search</a> to start making movie magic!</h5>
          <div className={styles.titleDiv}>
            <img src="https://i.postimg.cc/Tw0qXjpJ/ALG-Movie-Magic-Drop-Shadow-1.png" alt="flamingo" />
          </div>
      </main>
    </>
  )
}

export default Landing