import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SignIn from "./component/SignIn";
import Signup from "./component/Signup";
import Home from "./component/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/SignUp",
        element: <Signup />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
