import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/style/style.css'
import './app/style/reset.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
