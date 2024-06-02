import React from "react";
import "./App.css";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import ProductDetailPage from "./Pages/ProjectDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
