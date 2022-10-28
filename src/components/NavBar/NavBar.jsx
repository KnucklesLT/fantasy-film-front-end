import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'


const NavBar = ({ user, handleLogout }) => {
  
  return (
    <nav className={styles.container}>
      {user ?
        <ul className={styles.links}>
          <div className={styles.welcome}>
          <a href="/">
          <li><img src="https://i.postimg.cc/Zn3N5rqQ/ALG-Logo.png" alt="logo" /></li></a>
          </div>
          <li><Link to="/movie-search">Movie Search</Link></li>
          <li><Link to="/actor-search">Actor Search</Link></li>
          <li><Link to="/dreamcastlist">Dreamcasts</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          {/* <li><Link to="/change-password">Change Password</Link></li> */}
        </ul>
      :
        <ul className='Login'>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar