import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/views/Login";
import UserNormal from "./components/views/UserNormal";
import PrivateRoute from "./components/private/PrivateRoute";

import ContextApp from "./components/context/ContextApp";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/admin/*", element: <PrivateRoute /> },
    { path: "/normaluser", element: <UserNormal /> },
    { path: "*", element: <h1>Pagina no encontrada</h1> },
  ]);

  return (
    <ContextApp>
      <RouterProvider router={router} />
    </ContextApp>
  );
}

export default App;
