import React from "react";
import { NavLink } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../styles/navbar.css";

const menuItems = [
  {
    name: "Home",
    path: "/",
    description: "Landing Page",
  },
  {
    name: "Create Account",
    path: "createaccount",
    description: "Register New BadBank Account",
  },
  {
    name: "Dashboard",
    path: "dashboard",
    description: "Transaction Data ",
  },
  {
    name: "Deposit",
    path: "deposit",
    description: "Deposit Transactions",
  },
  {
    name: "Withdraw",
    path: "withdraw",
    description: "Withdrawal Transactions",
  },
  {
    name: "All Data",
    path: "alldata",
    description: "User Account Information",
  },
];

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ marginBottom: "1rem" }}
      >
        <div className="container-fluid ms-5">
          <NavLink to="/" className="navbar-brand fs-1 fw-bold logo">
            <span className="logocolor">B</span>ad
            <span className="logocolor2">B</span>ank
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarNav"
          >
            <div className="navbar-nav nav-pills">
              {menuItems.map((item, index) => (
                <OverlayTrigger
                  key={index}
                  placement="bottom"
                  overlay={<Tooltip>{item.description}</Tooltip>}
                >
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link fs-6 mx-3 active"
                        : "nav-link fs-6 mx-3"
                    }
                  >
                    {item.name}
                  </NavLink>
                </OverlayTrigger>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;