import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import "./styles/style.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from './pages/Error';
import Project from './pages/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
    {
    path: "/project",
    element: <Project />,
    errorElement: <ErrorPage />,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


