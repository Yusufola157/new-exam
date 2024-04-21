import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../utils/hoc/ErrorBoundary";
import NotFoundPage from "../utils/hoc/NotFound";
import MainLayout from "../components/layouts/pageLayout";
import LandingPage from "../pages/LandingPage";
import SingleRepo from "../pages/SingleRepo";


export const element = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<LandingPage/>,
                errorElement:<ErrorBoundary/>,
                hasErrorBoundary:true,
            },
            {
                path:'repos/:id',
                index:true,
                 element:<SingleRepo/>,
                errorElement:<ErrorBoundary/>,
                hasErrorBoundary:true,
            },
        ]
    },
    {
        path:'/error',
        element:<ErrorBoundary/>

    },
    {
        path: "*",
        element: <NotFoundPage />,
      },
])