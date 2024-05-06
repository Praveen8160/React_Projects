import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import { User } from "./component/User.jsx";
import Github, { githubloader } from "./component/Github.jsx";

// const rout=createBrowserRouter([{
//   path:"/",
//   element:<App/>,
//   children:[{
//     path:"/",
//     element:<Home/>,
//   },
//   {
//     path:"/About",
//     element:<About/>
//   },
//   {
//     path:"/Contact",
//     element:<Contact/>,
//   }
// ]
// }])
const rout = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/user/:userid" element={<User />}></Route>
      <Route
        loader={githubloader}
        path="/Github"
        element={<Github />}
      ></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rout}></RouterProvider>
  </React.StrictMode>
);
