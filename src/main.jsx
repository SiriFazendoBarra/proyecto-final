import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataContext'
import LoginProvider from './context/LoginContext'
import FavoritesProvider from './context/FavoritesContext'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/css/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <DataProvider>
    <LoginProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritesProvider>
    </LoginProvider>
  </DataProvider>


  // </React.StrictMode>,
)
