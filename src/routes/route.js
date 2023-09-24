import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutMeEdit from "../pages/AboutMeEdit";
import App from "../App";
import SkillsEdit from "../pages/SkillsEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <h1>Something Went Wrong</h1>,
  },
  {
    path: "my-bio-elRed-assignment",
    element: <MainPage />,
    errorElement: <h1>Something Went Wrong</h1>,
  },
  {
    path: "my-bio-elRed-assignment/editAboutMe",
    element: <App children={<AboutMeEdit />} />,
  },
  {
    path: "my-bio-elRed-assignment/editSkills",
    element: <App children={<SkillsEdit />} />,
  },
  {
    path: "editAboutMe",
    element: <App children={<AboutMeEdit />} />,
  },
  {
    path: "editSkills",
    element: <App children={<SkillsEdit />} />,
  },
]);
