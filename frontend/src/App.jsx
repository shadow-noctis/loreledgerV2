import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import MyCharacters from './components/MyCharacters'

export default function App() {

  return (
    <Router>
      <div id='menu'>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/my-characters'>My Characters</NavLink></li>
        </ul>
      </div>

      <div id='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-characters' element={<MyCharacters />} />
        </Routes>
      </div>
    </Router>
  )


}
