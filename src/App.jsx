import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import TeamPage from './pages/TeamPage'
import MasalaPage from './pages/MasalaPage'
import OlympSectionPage from './pages/OlympSectionPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/olympsection' element={<OlympSectionPage/>}/>
          <Route path='/team' element={<TeamPage/>}/>
          <Route path='/masala' element={<MasalaPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App