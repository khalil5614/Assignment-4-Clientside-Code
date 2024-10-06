import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ProductsPage from "../Pages/ProductsPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/products",
        element: <ProductsPage />,
        loader: () =>
          fetch("https://assignment-4-server-side-code.vercel.app/api/courses"),
      },

      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-4-server-side-code.vercel.app/api/courses/${params.id}`
          ),
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default router;
