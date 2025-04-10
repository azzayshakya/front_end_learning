import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import { ErrorPage } from "../pages/common/ErrorPage";
import { NotFoundPage } from "../pages/common/NotFoundPage";
import RedirectPage from "../pages/common/RedirectPage";
import HomeUILayout from "../layout/Home/HomeLayout";
import SimpleApi from "@/pages/SimpleApi";
import Tanstack from "@/pages/Tanstack";
import MapFunction from "@/pages/MapFunction";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeUILayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/SimpleApi",
          element: <SimpleApi />,
        },
        {
          path: "/Tanstack",
          element: <Tanstack />,
        },
        {
          path: "/MapFunction",
          element: <MapFunction />,
        },

        {
          path: "*",
          element: <NotFoundPage />,
        },
        {
          path: "/redirect",
          element: <RedirectPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  // { basename: import.meta.env.BASE_URL }
);

export default router;
