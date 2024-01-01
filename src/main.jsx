import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-auto  lg:w-[1200px] mx-auto'>

     <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
