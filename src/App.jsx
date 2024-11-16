import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponents'
import ItemPage from './components/ItemPage'
import SigninPage from './components/SigninPage'

function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/car/:id' element={<ItemPage />} />
            <Route path='/sign' element={<SigninPage />} />
          </Routes>
          
        </div>
      </Router>
    </>
  )
}

export default App
