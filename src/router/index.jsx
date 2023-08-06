import { Home } from "../pages/Home/Home";
import { Location } from "../pages/Location/Location";

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
