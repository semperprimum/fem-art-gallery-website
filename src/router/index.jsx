import { Home } from "../pages/home/Home";
import { Location } from "../pages/location/Location";

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
