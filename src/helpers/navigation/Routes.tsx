import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "./paths";
import { Search } from "../../components/Search/Search";
import { FavoriteRepositories } from "../../components/FavoriteRepositories/FavoriteRepositories";

const router = createBrowserRouter([
  {
    path: paths.main,
    element: <Search />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: paths.favoritesRepositories,
    element: <FavoriteRepositories />,
  },
]);

export const Routes = () => <RouterProvider router={router} />;
