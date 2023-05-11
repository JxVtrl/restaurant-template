import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { App } from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider } from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
