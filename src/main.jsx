import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { ModalProvider } from './context/ModalContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
    <App />
    </ModalProvider>
    <Toaster />

  </StrictMode>,
)
