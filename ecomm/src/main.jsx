import { StyledEngineProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { store } from './Redux/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider> </StyledEngineProvider>
  </React.StrictMode>
)
