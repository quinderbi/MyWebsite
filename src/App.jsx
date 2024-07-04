import React from 'react'
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/projects",
      element: <Projects/>,
    },
    {
      path: "*",
      element: <Navigate to="/"/>,
    },
  ]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App