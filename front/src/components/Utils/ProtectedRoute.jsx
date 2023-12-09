import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  canActivate,
  redirectPath = "/login"
}) => {
  if(!canActivate) {
    return <Navigate to={redirectPath}/>
  }
  return <Outlet/>
}

export default ProtectedRoute;