import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js'
import SingleCocktail from './pages/SingleCocktail.js'
import Error from './pages/Error.js'
import Navbar from './components/Navbar.js'
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home></Home>}>
        </Route>
        <Route path='/about' element={<About></About>}>
        </Route>
        <Route path='/cocktail/:id' element={<SingleCocktail></SingleCocktail>}>
        </Route>
        <Route path='*' element={<Error></Error>}>
        </Route>
      </Routes>
    </Router>
  )
}
export default App

