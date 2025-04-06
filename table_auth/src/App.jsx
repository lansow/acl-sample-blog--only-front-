import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './login'
import Mainp from './mainp'
import Admind from './admind'

function App() {
return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Mainp/>} />
        <Route path="/ad" element={<Admind/>} />
      </Routes>
    </Router>
  )
}

export default App
