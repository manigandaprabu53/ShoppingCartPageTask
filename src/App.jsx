import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardContext from './Components/CardContext'
import Cards from './Components/Cards'


function App() {
  return <>
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CardContext><Cards/></CardContext>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </>
}

export default App