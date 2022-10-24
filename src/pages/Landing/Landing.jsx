import styles from './Landing.module.css'

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.splash}>
          <img src="https://wallpaperaccess.com/full/1561985.jpg" alt="Movie Theater" />
        </section>
        <section className={styles.about}>
          <header>

            <h1>ABOUT US</h1>
          </header>
          <article>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2022 ALG Productions RIGHTS RESERVED</p>
      </footer>
    </>
  )
}

export default Landing