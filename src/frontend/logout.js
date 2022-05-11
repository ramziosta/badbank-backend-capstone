import { Link, NavLink } from "react-router-dom";
import LoginLogoutButton from "../components/LoginLogoutButton";


function Logout() {
  return (
    <>
      <Link to="/login" class="fa fa-user"></Link>
      <div style={{ background: "grey", height: "50vh" }}>
        <div className="text-center fs-3" style={{ padding: "3rem" }}>
          <h1
            className="text-white"
            style={{ textAlign: "center", marginTop: "5rem" }}
          >
            Account Logout
          </h1>
          <div className="text-center fs-2" style={{margin:"3rem"}}>
          <LoginLogoutButton />
        </div>
        <Link
                  to="/createaccount"
                  className="btn btn-primary fs-2 Link "
                >
                  Create an new Account
                </Link>
        </div>
      </div>
    </>
  );
}

export default Logout;
