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

 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/addBook',
                element: <AddBooks/>,
            },
            {
                path: '/allBooks',
                element: <AllBooks/>,
                loader: () => fetch('http://localhost:5000/api/v1/allBooks')
            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks/>
            },
            {
                path: '/categorizedBooks/:id',
                loader: ({params}) => fetch(`http://localhost:5000/api/v1/allBooks?category=${params.id}`),
                element:<CategorizedBooks/>
            },
            {
                path: '/bookDetails/:id',
                element: <BookDetails/>
            },
            {
                path: '/readBook/:id',
                element: <ReadBook/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default router;