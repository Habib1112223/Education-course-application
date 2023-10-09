import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";

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
                        path:'/login',
                        element:<Login></Login>
                  },
                  {
                        path:'/register',
                        element:<Register></Register>
                  },
                  {
                        path:'/event/:id',
                        element:<SingleEvent></SingleEvent>,
                        loader: () => fetch('event.json')
                  }
             
            ]
      }
]);
export default router;