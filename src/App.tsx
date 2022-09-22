import { useState } from 'react'
import { globalStyles } from 'lib/globalStyles'
import Text from 'components/Typography/TypographyText'
import './App.css'

function App() {
  globalStyles()
  return (
    <div className="App">
      <Text>
        Hello World
      </Text>
    </div>
  )
}

export default App
