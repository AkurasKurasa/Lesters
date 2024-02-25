import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/global.css'

import App from './pages/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)
