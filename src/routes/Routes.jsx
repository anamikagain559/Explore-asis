import { createBrowserRouter } from "react-router-dom";
import AddCountry from "../AddCountry";
import App from "../App";
import AddTouristsSpotPage from "../components/AddTouristsSpotPage";
import AllTouristSpots from "../components/AllTouristSpots";
import CountrySpots from "../components/CountrySpots";
import DetailsTouriestPage from "../components/DetailsTouriestPage";
import DetailsTouristPageEmail from "../components/DetailsTouristPageEmail";
import UpdateTouristPage from "../components/UpdateTouristPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Layouts/Root";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch("https://travel-website-server-with-auth.vercel.app/countries"),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddTouristsSpotPage></AddTouristsSpotPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/countrySpot/:country_Name",
        element: <CountrySpots></CountrySpots>,
        loader: () =>
          fetch(
            "https://travel-website-server-with-auth.vercel.app/touristsSpot"
          ),
      },
      {
        path: "/allTouristsSpot",
        element: (
          <PrivateRoute>
            <AllTouristSpots></AllTouristSpots>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://travel-website-server-with-auth.vercel.app/touristsSpot"
          ),
      },
      {
        path: "TouristsSpotDetails/:id",
        element: (
          <PrivateRoute>
            <DetailsTouriestPage></DetailsTouriestPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://travel-website-server-with-auth.vercel.app/touristsSpot/${params.id}`
          ),
      },
      {
        path: "myTouristsSpot/:email",
        element: (
          <PrivateRoute>
            <DetailsTouristPageEmail></DetailsTouristPageEmail>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://travel-website-server-with-auth.vercel.app/touristsSpot"
          ),
      },
      {
        path: "updateTouristsSpot/:id",
        element: <UpdateTouristPage></UpdateTouristPage>,
        loader: ({ params }) =>
          fetch(
            `https://travel-website-server-with-auth.vercel.app/touristsSpot/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add_country",
        element: <AddCountry></AddCountry>,
      },
    ],
  },
]);

export default router;
