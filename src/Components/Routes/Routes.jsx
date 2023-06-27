import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Home/Layout/Main";
// import Project from "../Home/Project/Project";

  export const  router = createBrowserRouter([
   
    {
        path: "/",
        element: <Main></Main>,
        children: [
          // {
          //   path: '/',
          //   element: <Home></Home>
          //  },
          //  {
          //   path: 'project',
          //   element: <Project></Project>
          //  }
        ]
    }

  ]);