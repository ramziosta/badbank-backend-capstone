import LoginLogoutButton from "./LoginLogoutButton";
import { NavLink } from "react-router-dom";
import "../styles/siteSideBar.css";
export default function SiteSideBar() {

  return (
    <>
    <div className="sidebar bg-dark">
      <NavLink to="/dashboard" className="a"
      style={{color:"white"}}
      >Dashboard</NavLink>
      <NavLink to="/deposit" className="a"
      style={{color:"white"}}
      >Deposit</NavLink>
      <NavLink to="/withdraw" className="a"
      style={{color:"white"}}
      >Withdraw</NavLink>
      <NavLink to="/alldata" className="a"
      style={{color:"white"}}
      >Users</NavLink>
      <LoginLogoutButton 
       />
    </div>
    </>
  );
}

