import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import Cart from "./features/Cart/Cart";

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
    element: <Cart />,
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
