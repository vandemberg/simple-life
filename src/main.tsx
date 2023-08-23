import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Style css (the order is important)
import "./style/reset.css"
import "./style/root.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
