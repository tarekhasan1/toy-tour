import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blog from "../components/Blog/Blog";
import MyToys from "../components/MyToys/MyToys";
import AllToys from "../components/AllToys/AllToys";
import AddToy from "../components/AddToy/AddToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },

        {
          path: '/login',
          element: <Login></Login>
        },

        {
          path: '/register',
          element: <Register></Register>
        },

        {
          path: '/my-toys',
          element: <MyToys></MyToys>
        },

        {
          path: '/all-toys',
          element: <AllToys></AllToys>
        },

        {
          path: '/add-a-toy',
          element: <AddToy></AddToy>
        },
        
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);

  export default router;