import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { NavigationProvider } from './context/NavContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <NavigationProvider>
          <App />
      </NavigationProvider>
    
  </React.StrictMode>,
)
