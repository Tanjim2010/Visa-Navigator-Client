import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../pages/HomePage";
import AuthenticationPage from "../pages/Authentication";
import Login from "../components/Login";
import Registration from "../components/Registration";
import ErrorPage from "../pages/ErrorPage";
import VisaDetailsPage from "../pages/VisaDetailsPage";
import AddVisaPage from "../pages/AddVisaPage";
import AllVisasPage from "../pages/AllVisasPage";
import PrivateRoutes from "./PrivateRoutes";
import MyAddedVisasPage from "../pages/MyAddedVisasPage";
import MyVisaApplicationsPage from "../pages/MyVisaApplicationsPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path: "/all_visas",
                element: <AllVisasPage></AllVisasPage>,
                loader: ()=> fetch('https://visa-navigator-server-side.vercel.app/visas')
            },
            {
                path: "/add_visa",
                element: <PrivateRoutes><AddVisaPage></AddVisaPage></PrivateRoutes>
            },
            {
                path: "/my_added_visas",
                element: <PrivateRoutes><MyAddedVisasPage></MyAddedVisasPage></PrivateRoutes>
            },
            {
                path: "/my_visa_application",
                element: <PrivateRoutes><MyVisaApplicationsPage></MyVisaApplicationsPage></PrivateRoutes>
            },
            {
                path: "/visa_details/:id",
                element: <PrivateRoutes><VisaDetailsPage></VisaDetailsPage></PrivateRoutes>,
                loader: ({params})=> fetch(`https://visa-navigator-server-side.vercel.app/visa/${params.id}`)
            },
            {
                path: "/authentication",
                element: <AuthenticationPage></AuthenticationPage>,
                children: [
                    {
                        path: "/authentication",
                        element: <Login></Login>
                    },
                    {
                        path: "/authentication/register",
                        element: <Registration></Registration>
                    }
                ]
            }
        ]
    },
]);

export default router;