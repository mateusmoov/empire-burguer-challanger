import { useState } from 'react'
import { globalStyles } from 'lib/globalStyles'
import { IndexPage } from 'pages'
import './App.css'

function App() {
  globalStyles()
  return (
    <IndexPage />
  )
}

export default App
