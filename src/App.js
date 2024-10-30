import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/screens/landing/Landing'
import Signup from './components/screens/authScreens/login/Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default App
