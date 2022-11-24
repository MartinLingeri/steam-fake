import React, { Suspense } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

import theme from './theme'
import App from './App'

import './i18n'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement!)
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Suspense>
        <App />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
)
