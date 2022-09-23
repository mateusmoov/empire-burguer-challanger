import { useState } from 'react'
import { globalStyles } from 'lib/globalStyles'
import Text from 'components/Typography/TypographyText'
import { StyledButton, StyledIconButton } from 'components/Button/Button'
import { Flex } from 'components/Flex/Flex'
import WhatsAppIcon from 'assets/whatsapp-logo.svg'
import './App.css'

function App() {
  globalStyles()
  return (
    <div className="App">
      <Flex>
        <StyledButton variant={'secondary'}>
          HELLO WORLD
        </StyledButton>
      </Flex>
    </div >
  )
}

export default App
