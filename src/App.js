import NavBar from "./components/navbar.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllData from "./frontend/alldata.js";
import CreateAccount from "./frontend/createaccount.js";
import Deposit from "./frontend/deposit.js";
import Home from "./frontend/home.js";
import Withdraw from "./frontend/withdraw.js";
import Login from "./frontend/login.js";
import Logout from "./frontend/logout";
import Footer from "./components/footer";
import DashBoard from "./frontend/DashBoard";
import "./styles/Home.css";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/dashboard/" exact element={<DashBoard />} />
          <Route path="/deposit/" exact element={<Deposit />} />
          <Route path="/withdraw/" exact element={<Withdraw />} />
          <Route path="/alldata/" exact element={<AllData />} />
          <Route path="/login/" exact element={<Login />} />
          <Route path="/logout/" exact element={<Logout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
