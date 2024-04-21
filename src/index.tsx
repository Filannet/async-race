import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Garage from "./pages/garage/Garage";
import Winners from "./pages/winners/Winners";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Garage />,
    },
    {
        path: "/garage",
        element: <Garage />,
    },
    {
        path: "/winners",
        element: <Winners />,
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
