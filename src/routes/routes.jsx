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
import SingleToyData from "../components/SingleToyData/SingleToyData";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`${import.meta.env.VITE_SERVER_API}/categories`)
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
          element: <ProtectedRoutes><MyToys></MyToys></ProtectedRoutes>
        },

        {
          path: '/all-toys',
          element: <AllToys></AllToys>,
          loader: () => fetch(`${import.meta.env.VITE_SERVER_API}/cars`)
        },

        {
          path: '/add-a-toy',
          element: <ProtectedRoutes><AddToy></AddToy></ProtectedRoutes>
        },
        
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/all-toys/:id',
          element: <ProtectedRoutes>
          <SingleToyData></SingleToyData>
          </ProtectedRoutes>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_SERVER_API}/single-car/${params.id}`)
        }
      ]
    },
  ]);

  export default router;