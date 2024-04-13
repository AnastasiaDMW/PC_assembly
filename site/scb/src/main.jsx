import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './modules/css/reset.css'
import './index.css'
import './modules/scss/config.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
