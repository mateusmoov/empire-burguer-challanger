import { useState } from 'react'
import { globalStyles } from 'lib/globalStyles'
import Text from 'components/Typography/TypographyText'
import { StyledButton, StyledIconButton } from 'components/Button/Button'
import WhatsAppIcon from 'assets/whatsapp-logo.svg'
import './App.css'

function App() {
  globalStyles()
  return (
    <div className="App">
      <StyledButton variant='secondary'>
        HELLO WORLD
      </StyledButton>

      <StyledIconButton variant='primary'>
        <img src={WhatsAppIcon} alt="zapzap" />
        Hello World
      </StyledIconButton>
    </div >
  )
}

export default App
