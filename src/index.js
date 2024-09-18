import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
// eslint-disable-next-line import/order
import { Provider } from 'react-redux'
import App from './App'

// eslint-disable-next-line import/order
import { configureStore } from '@reduxjs/toolkit'
import { PortfolioReducer } from './hooks/postsSlise'

const stores = configureStore(PortfolioReducer)

const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={stores}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
