import "../src/styles/index.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import ReactDOM from "react-dom";
import { UserContext } from "./components/context.js";
import "../src/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//> setup userContext here to provide the information to the whole app

ReactDOM.render(
  <React.StrictMode>
      <UserContext.Provider
          value={{
            users: [
              {
                user: "",
                email: "",
                pwd: "",
                balance:null,
                created:"",
                transactionType: "",
                transactionAmount: null,
                transactionDate: null,
              },
            ],
            transactions:[],
            sessionActivity:[],
            log: false,
            login: false,
            register: false,
          }}
        >
    <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
