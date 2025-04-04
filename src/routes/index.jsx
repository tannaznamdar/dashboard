import { createBrowserRouter } from "react-router";

import HomePage from "./../pages/HomePage";
import AboutPage from "./../pages/AboutPage";
import ToDoesPage from "./../pages/ToDoesPage";
import Panel from "./../pages/dashboard-pages/Panel";
import TeamItem from "./../pages/dashboard-pages/TeamItem";
import ProjectsItem from "./../pages/dashboard-pages/ProjectsItem";
import CalendarItem from "./../pages/dashboard-pages/CalendarItem";
import DocumentsItem from "./../pages/dashboard-pages/DocumentsItem";
import ReportsItem from "./../pages/dashboard-pages/ReportsItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/todos",
    element: <ToDoesPage />,
  },
  {
    path: "/dashboard/panel",
    element: <Panel />,
  },
  {
    path: "/dashboard/Team",
    element: <TeamItem />,
  },
  {
    path: "/dashboard/Projects",
    element: <ProjectsItem />,
  },
  {
    path: "/dashboard/Calendar",
    element: <CalendarItem />,
  },
  {
    path: "/dashboard/Documents",
    element: <DocumentsItem />,
  },
  {
    path: "/dashboard/Reports",
    element: <ReportsItem />,
  },
]);

export default router;
