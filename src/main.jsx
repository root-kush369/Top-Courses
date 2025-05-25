// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// for toast
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
// for toast

// here its main.jsx instead of index.css

// NOTE ~> createRoot is a function in React used to create a root object for rendering React components in a DOM element.


createRoot(document.getElementById('root')).render(


  // <StrictMode>

  
  //>>>>>>>>>>>>>>>>>>>>
    <div>
    <App />
    <ToastContainer> </ToastContainer>
    </div>
   //<<<<<<<<<<<<<<<<<<<<<<<<<< 




  // </StrictMode>,
)
