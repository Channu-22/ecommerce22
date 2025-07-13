// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './pages/Home.jsx'
import Router from './Router.jsx'

createRoot(document.getElementById('root')).render(
 
    // <App />
    // <Products />
    <Router/>
  
)
