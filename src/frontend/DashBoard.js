import { useContext } from "react";
import { UserContext } from "../components/context";
import Card from "../components/context";
import SiteSideBar from "../components/siteSideBar";
import { NavLink, Link } from "react-router-dom";
import LoginLogoutButton from "../components/LoginLogoutButton";
import Header from "../components/Header";
import Table2 from "../components/Table2";
import "../styles/alldata.css";

function DashBoard() {
  const ctx = useContext(UserContext);
  return (
    <>
      {ctx.users[0].user === "" ? (
        <>
          <Link to="/login" className="fa fa-user"></Link>
          <div style={{ background: "grey", height: "50vh" }}>
            <div className="text-center fs-3" style={{ padding: "3rem" }}>
              Please <LoginLogoutButton />
              <br />
              or{" "}
              <NavLink
                to="/createaccount/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Create An Account.
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <>
          <SiteSideBar />
          <div className="content">
            <Card
              body={
                <div>
                  <Header />
                  <Table2 />
                </div>
              }
            />
          </div>
        </>
      )}
    </>
  );
}

export default DashBoard;
