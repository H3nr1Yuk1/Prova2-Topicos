import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import App from './App';
=======
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
>>>>>>> 757780e594dbc20c556433b0ac8ef6f51bca883a

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
<<<<<<< HEAD

=======
>>>>>>> 757780e594dbc20c556433b0ac8ef6f51bca883a
