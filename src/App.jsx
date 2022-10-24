// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ActorSearch from './pages/ActorSearch/ActorSearch'
import MovieList from './pages/MovieList/MovieList'
import MovieSearch from './pages/MovieSearch/MovieSearch'
import DreamcastList from './components/DreamcastList/DreamcastList'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/actor-search"
          element={
            <ProtectedRoute user={user}>
              <ActorSearch />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie-list"
          element={
            <ProtectedRoute user={user}>
              <MovieList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dreamcasts"
          element={
            <ProtectedRoute user={user}>
              <DreamcastList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie-search"
          element={
            <ProtectedRoute user={user}>
              <MovieSearch />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
