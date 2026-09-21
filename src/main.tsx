import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HandednessProvider from './context/HandednessProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HandednessProvider>
      <App />
    </HandednessProvider>
  </StrictMode>,
)
