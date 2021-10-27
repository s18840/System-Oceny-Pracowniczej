import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../components/Header/Header'
import NavBar from '../components/Navigation/NavBar'

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
    </Router>
  )
}

export default App
