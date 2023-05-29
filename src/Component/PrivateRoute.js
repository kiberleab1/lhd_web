import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  let auth;
  const toKnowRole = useSelector((state) => state.userRole);
  const incomingRole = JSON.stringify(toKnowRole.todoReducer[0]);
  const adminRole = JSON.stringify({ text: "admin" });
  if (incomingRole == adminRole) {
    auth = { token: true };
  } else {
    auth = { token: false };
  }

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
