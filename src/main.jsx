import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './Routers/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}/>
    </AuthProvider>
  </React.StrictMode>,
)
