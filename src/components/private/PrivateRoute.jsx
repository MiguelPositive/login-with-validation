import { Routes, Route } from "react-router-dom";
import Admin from "../views/Admin";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PrivateRoute() {
  const { isAdmin } = useContext(store);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, []);

  return isAdmin ? (
    <Routes>
      <Route path="/" element={<Admin />} />
    </Routes>
  ) : null;
}

export default PrivateRoute;
