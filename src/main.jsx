import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataContext'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>

  // </React.StrictMode>,
)
