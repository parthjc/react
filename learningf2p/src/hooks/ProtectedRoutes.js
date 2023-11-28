import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoginUser } from "../users/LoginUser";

//user defined hook
const useAuth = () => {
  const [token, settoken] = useState("");
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {

    settoken(sessionStorage.getItem("token"));

    if (token != "" && token != null) {
      setisAuthenticated(true);
    } else {
      setisAuthenticated(false);
    }
    
  }, [token]);

  //localStorage.getItem("token")

  return isAuthenticated;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth(); //true or false
  return isAuth ? <Outlet /> : <LoginUser />;
};
export default ProtectedRoutes;