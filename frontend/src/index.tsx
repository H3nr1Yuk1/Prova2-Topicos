import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactDOM from "react-dom/client";
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
