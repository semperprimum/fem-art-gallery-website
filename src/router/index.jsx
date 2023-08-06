import { Home } from "../pages/home/Home.jsx";
import { Location } from "../pages/location/Location.jsx";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/location/",
    element: <Location />,
  },
];
