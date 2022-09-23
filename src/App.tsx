import { useState } from 'react'
import { globalStyles } from 'lib/globalStyles'
import { Navbar } from 'components/Navbar/Navbar'
import './App.css'

function App() {
  globalStyles()
  return (
    <Navbar />
  )
}

export default App
