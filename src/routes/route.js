import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutMeEdit from "../pages/AboutMeEdit";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <h1>Something Went Wrong</h1>,
  },
  {
    path: "editAboutMe",
    element: <App children={<AboutMeEdit />} />,
  },
]);
