import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import "./styles/style.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as topicLoader0 } from "./components/myProjects";

import ErrorPage from './pages/Error';
import Project,  { loader as topicLoader }from './pages/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: topicLoader0,

  },
    {
    path: "/project/:id",
    element: <Project />,
    errorElement: <ErrorPage />,
      loader: (params) => topicLoader(params),

  },
  

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


