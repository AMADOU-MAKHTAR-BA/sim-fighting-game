import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./Pages/LayoutPage/LayoutPage.jsx";
import HommePage from "./Pages/HomePage/HommePage.jsx";
import TousLesPersos from "./Pages/TousLesPersos/TousLesPersos.jsx";
import Acceuil from "./Pages/Accueil/Accueil.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import CreationPerso from "./Pages/CreationPerso/CreationPerso.jsx";


function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        {
          index: true,
          element: <HommePage />,
        },
        {
          path: "/tous-les-persos",
          element: <TousLesPersos />
        },
        {
          path: "/accueil",
          element: <Acceuil />
        },
        {
          path: "/creer-un-personnage",
          element: <CreationPerso />
        }
      ],
    },
    {
      path: "*",
      element: <ErrorPage /> // Capture toutes les URLs non définies
    }
  ])

  return (
    <RouterProvider router={myRouter} />
  );
}

export default App;