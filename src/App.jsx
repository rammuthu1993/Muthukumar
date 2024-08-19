import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { PortFolio } from "./components/PortFolio"
import { Skills } from "./components/Skills"

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<PortFolio/>}/>
     </Routes>
    </>
  )
}

export default App
