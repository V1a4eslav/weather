import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Home} from "../pages/Home/Home";
import {Month} from "../pages/Month/Month";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/month',
        element: <Month/>
    }
]);

export const RootRouter = () => {
    return <RouterProvider router={router} />
}