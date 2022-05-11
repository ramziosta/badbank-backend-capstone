import { useContext } from "react";
import { UserContext } from "../components/context";
import Card from "../components/context";
import LoginLogoutButton from "../components/LoginLogoutButton";
import SiteSideBar from "../components/siteSideBar";
import { NavLink, Link } from "react-router-dom";
import "../styles/alldata.css";

function AllData() {


  
  const ctx = useContext(UserContext);

  const Table = () => {
    const maskPwd = (pwd) => pwd.substring(0,1) + '*'.repeat(pwd.length - 1);
    const userdata = ctx.users.filter((item) => item.user != "");
    const UserInfo = userdata.map((info, index) => {
      return (
        <>
        <h4
          className="header"
          style={{ fontSize: "1.3rem", color:"white" , padding:".4rem", border:"solid black 1px", backgroundColor: "#0079d5"}}
        >
          Account No. ending in XXX-XXX-XXX-{ctx.users[0].accountNumber}
        </h4>
        <table key={index}  class="table table-hover table-fixed">
          <tr>
            <th>User Name</th>
            <td key={ctx.user}>{info.user}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td key={ctx.email}>{info.email}</td>
          </tr>
          <tr>
            <th>Password</th>
            <td key={ctx.pwd} type="password">{maskPwd(info.pwd)}</td>
          </tr>
          <tr>
            <th>Date Created</th>
            <td key={ctx.created}>{info.created}</td>
          </tr>
          <tr>
            <th>Account Type</th>
            <td key={ctx.accountType}>{info.accountType}</td>
          </tr>
        </table>
     
 
      </>
      );
    });

    return <tbody>{UserInfo}</tbody>;
  };

return (
    //> shows the login button and create an account if user not found/ not created/ not logged in
    <>
      {ctx.users[0].user == "" ? (
        <>
      <Link to="/login" className="fa fa-user"></Link>
      <div style={{background:"grey", height:"50vh"}}>
     
        <div className="text-center fs-3" style={{padding:"3rem"}}>
          Please <LoginLogoutButton />
          <br />
          or <NavLink to="/createaccount/" style={{textDecoration: "none", color:"white"}}>Create An Account.</NavLink>
        </div>
        </div>
        </>
      ) : (
        <>
          <SiteSideBar />
          <div className="content alldata-card">
            <Card className="width auto"
              body={
                <div>
                    <Table />
                </div>
              }
            />
          </div>
        </>)
      }
    </>      
  );
}

export default AllData;
