import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from ".";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
