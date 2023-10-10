import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../Pages/Gallery/Gallery";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
      {
            path:'/',
            errorElement:<Error></Error>,
            element:<Root></Root>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>   
                  },
                  {
                        path:'/about',
                        element:<About></About> 
                  },

                  {
                        path:'/login',
                        element:<Login></Login>
                  },
                  {
                        path:'/register',
                        element:<Register></Register>
                  },
                  {
                        path:'/event/:id',
                        element: <SingleEvent></SingleEvent>,
                        loader: () => fetch('event.json')
                  },
                  {
                        path:'/services',
                        element: <PrivateRoute><Services></Services></PrivateRoute>
                  },
                  {
                        path:'/gallery',
                        element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
                  }

             
            ]
      }
]);
export default router;