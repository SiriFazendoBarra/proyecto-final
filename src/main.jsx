import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataContext'
import LoginProvider from './context/LoginContext'
import FavoritesProvider from './context/FavoritesContext'
import PublicationsProvider from './context/PublicationsContext'
import CartProvider from './context/CartContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SearchProvider from './context/SearchContext'





ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <BrowserRouter>

    <SearchProvider>
      <DataProvider>
        <LoginProvider>
          <FavoritesProvider>
            <PublicationsProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </PublicationsProvider>
          </FavoritesProvider>
        </LoginProvider>
      </DataProvider>
    </SearchProvider>
  </BrowserRouter>

  // </React.StrictMode>,
)
