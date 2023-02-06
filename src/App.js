import './App.css'
import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      {/* <Routes>
        <Route path="/" />
      </Routes> */}
    </div>
  )
}

export default App
