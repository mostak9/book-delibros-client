import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";
import CategorizedBooks from "../Pages/CategorizedBooks";
import BookDetails from "../Pages/BookDetails";
import ReadBook from "../Pages/ReadBook";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateBook from "../Pages/UpdateBook";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/categorizedBooks/:id",
        loader: ({ params }) =>
          fetch(
            `https://libraria-server-assignment-11.vercel.app/api/v1/categorizedBooks?category=${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CategorizedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/readBook/:id",
        element: (
          <PrivateRoute>
            <ReadBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBook/:id",
        element: (
          <PrivateRoute>
            <UpdateBook />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://libraria-server-assignment-11.vercel.app/api/v1/allBooks/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
