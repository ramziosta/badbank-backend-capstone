import { useContext } from "react";
import { UserContext } from "./context";
import { NavLink } from "react-router-dom";

function LoginLogoutButton() {
  const ctx = useContext(UserContext);

  const handleLogout = () => {
    const elementIndex = ctx.users.findIndex(
      (item) => item.email == "" && item.pwd == ""
    );
    ctx.users.splice(elementIndex, 1);
    ctx.users.splice(0, 0, {
      name: "",
      email: "",
      pwd: "",
      balance: null,
    });
    ctx.log = false;
  };

  return ctx.log ? (
    <NavLink 
      to="/logout" className="a"
      style={{color:"white", textDecoration: "none"}}
      onClick={() => handleLogout()}   
    >
      Logout
    </NavLink>
  ) : (
    <NavLink
      to="/login"
      style={{color:"white", textDecoration: "none"}}
    >
     Login
    </NavLink>
  );
}

export default LoginLogoutButton;
