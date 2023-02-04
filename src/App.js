import './App.css'
import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { ProfileDetails } from './pages/ProfileDetails'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <ProfileDetails />
      {/* <Routes>
        <Route path="/" />
      </Routes> */}
    </div>
  )
}

export default App
