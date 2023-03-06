import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import './themes/index.css'
import store from './redux/store'
import { Provider } from "react-redux";

const App = () => {
  console.log(import.meta)

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
