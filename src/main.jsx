import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesRead from './components/PagesRead/PagesRead';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: 'pagesRead',
        element: <PagesRead></PagesRead>,
        loader: () => fetch('/booksData.json')
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
