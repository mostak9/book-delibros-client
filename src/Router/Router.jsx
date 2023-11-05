import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";

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
                element: <AllBooks/>
            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks/>
            }
        ]
    }
])

export default router;