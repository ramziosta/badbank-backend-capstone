import { useState, useContext } from "react";
import Card from "../components/context";
import { UserContext } from "../components/context";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SiteSideBar from "../components/siteSideBar";
import "../styles/SignIn.css";
import Header from "../components/Header";
import Table2 from "../components/Table2";

export const LoginUser = ({ user }) => {
  return (
    <>
      <h3>
        Welcome <span className="text-danger">{user.user}</span>
      </h3>
    </>
  );
};
function Login() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const [user, setUser] = useState({});
  const timeStamp = new Date().toLocaleDateString();
  const ctx = useContext(UserContext);

  function handleLogin() {
    const userLogin = ctx.users.filter(
      (item) => item.email == email && item.pwd == pwd
    );

    if (userLogin.length == 0) {
      alert(
        "Account email or password is incorrect, please try again. If you dont have an account, please register."
      );
      clearForm();
    }
    if (userLogin.length != 0) {
      setShow(false);
      const elementIndex = ctx.users.findIndex(
        (item) => item.email == email && item.pwd == pwd
      );
      //   const element = ctx.users[elementIndex]
      ctx.users.splice(elementIndex, 1);
      ctx.users.splice(0, 0, userLogin[0]);
      setUser(userLogin[0]);
    }
    ctx.log = true;

    setStatus("LogedIn");
    ctx.sessionActivity.push({
      activity: "Login",
      stamp: timeStamp,
    });
  }

  function clearForm() {
    setEmail("");
    setPwd("");
    setIsdisabled(true);
    setShow(true);
  }

  return (
    <>
      {show ? (
        <>
          <div style={{ background: "grey", height: "62vh" }}>
            <Card
              style={{
                maxWidth: "25rem",
                marginTop: "1rem",
                backgroundColor: "rgba(30,33,36)",
                width: "100%",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "1rem",
              }}
              className="loginCard bg-dark"
              status={status}
              body={
                <>
                  <h1
                    className="logocolor"
                    style={{
                      border: "solid 2px grey",
                      padding: ".4rem",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </h1>
                  <br />
                  <label htmlFor="email">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.currentTarget.value);
                      setIsdisabled(false);
                      if (!e.currentTarget.value) setIsdisabled(true);
                    }}
                  />
                  <br />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => {
                      setPwd(e.currentTarget.value);
                      setIsdisabled(false);
                      if (!e.currentTarget.value) setIsdisabled(true);
                    }}
                  />
                  <br />
                  <button
                    disabled={isDisabled ? true : false}
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </>
              }
            />
          </div>
        </>
      ) : (
        <>
          <SiteSideBar />
          <Card
            className="dashboard-card"
            style={{ maxWidth: "60%", marginTop: "4rem", marginLeft: "10rem" }}
            bgcolor="dark"
            // status={status}
            body={
              <>
                <div className="">
                  <LoginUser user={user} />
                  <br />
                  <Row className="text-center">
                    <Col>
                      <Link
                        to="/deposit"
                        className="btn btn-primary text-white Link"
                      >
                        Make a deposit
                      </Link>
                    </Col>
                    <Col>
                      <Link
                        to="/withdraw"
                        className="btn btn-primary text-white Link"
                      >
                        Make a withdraw
                      </Link>
                    </Col>

                    <div
                      style={{
                        backgroundColor: "lightgrey",
                        marginTop: "2rem",
                        padding: "2rem",
                      }}
                    >
                      <table className="table table-striped w-auto">
                        <Header />
                        <Table2 />
                      </table>
                    </div>
                  </Row>
                </div>
              </>
            }
          />
          {/* !------------- */}
        </>
      )}
    </>
  );
}

export default Login;
