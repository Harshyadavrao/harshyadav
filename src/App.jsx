import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Projects/Project'
import ProductionTracker from './components/projectt'
import Contact from './components/Contact/Contact'

function App() {
  

  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
