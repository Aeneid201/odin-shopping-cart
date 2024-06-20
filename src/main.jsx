import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from './Shop.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SingleProduct from './SingleProduct.jsx';
import ErrorPage from './ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop/>,
  },
  {
    path: "shop/:productId",
    element: <SingleProduct/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
