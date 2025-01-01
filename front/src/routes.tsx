import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/app/home";
import { AppLayout } from "./layouts/appLayout";
import { SignIn } from "./pages/app/sign-in";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/sign-in', element: <SignIn />}
        ]
    },

])