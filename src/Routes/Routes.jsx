import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    }
])


export default Routes;