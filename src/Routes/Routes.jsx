import { createBrowserRouter } from "react-router-dom";
import EdidtReview from "../Componets/EditReview/EdidtReview";
import ItmemDetails from "../Componets/ItemDetails/ItmemDetails";
import Main from "../Layout/Main";
import AddServies from "../Pages/AddServies/AddServies";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import MyReview from "../Pages/MyReview/MyReview";
import Services from "../Pages/Services/Services";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/services",
                element:<Services></Services>
            },
            {
                path:"/addservies",
                element:<PrivetRoute><AddServies></AddServies></PrivetRoute>
            },
            {
                path:"/myreview",
                element:<PrivetRoute><MyReview></MyReview></PrivetRoute>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/services/:id",
                loader:({params})=>fetch(`https://shafe-server.vercel.app/services/${params.id}`),
                element:<ItmemDetails></ItmemDetails>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/signin",
                element:<SignIn></SignIn>
            },
            {
                path:"/edit/:id",
                loader:({params})=> fetch(`https://shafe-server.vercel.app/editreviews/${params.id}`),
                element:<EdidtReview></EdidtReview>
            }
        ]
    }
]);

export default router;