import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Shop from "./Shop.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProduct from "./SingleProduct.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Cart from "./Cart.jsx";
import Home from "./Home.jsx";
import {
  QueryClient,
  useQuery,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products/:productId",
        element: <SingleProduct />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
