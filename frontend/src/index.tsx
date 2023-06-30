import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Error from './components/pages/Error'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cadastrar from './components/pages/Cadastras';
import Listar from './components/pages/Listar';
import Home from './components/pages/Home';
import Vizualizar from './components/pages/Visualizar';


const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },{
        path: "/Cadastrar",
        element: <Cadastrar />
      },{
        path: "/Listar",
        element: <Listar />
      },{
        path: "/Calcular",
        element: <Vizualizar />
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
