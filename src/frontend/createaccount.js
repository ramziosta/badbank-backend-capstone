import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import Card from "../components/context";
import { UserContext } from "../components/context";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/SignIn.css";
import {
  USER_REGEX,
  PWD_REGEX,
  EMAIL_REGEX,
} from "../helpers/FormFieldValidation";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase";

const timeStamp = new Date().toLocaleDateString();

function CreateAccount() {
  const userRef = useRef();
  const errRef = useRef();

  // sets and validates the username
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  // sets and validates the email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // sets and validates the paassword
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // sets and validates the confirm password
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  //creates an account number last 4 digits Only
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  // sets the error messages or success messages ==> need to be used/assigned a function
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //> sets warnings and errors
  const [warn, setWarn] = useState("");
  // shows and hids part of the screen
  const [show, setShow] = useState(true);

  //sets the status. use for user status/account status ==> need to be used/assigned a function. can be used for chat with customer service, if online/not
  const [status, setStatus] = useState("");

  const ctx = useContext(UserContext);

  // sets the focus when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // applies REGEX to validate the username . it will reloads when the user name changes
  useEffect(() => {
    setValidName(USER_REGEX.test(user));

    console.log("👽" + user);
  }, [user]);

  // applies REGEX to validate the email. it will reloads when the email changes
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));

    console.log("📨" + email);
  }, [email]);

  // applies REGEX to validate the password and passwordMatch . it will reloads when the  new password, and confirmation entered
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log("🤔" + result);
    console.log("🤫 " + pwd);
    setValidPwd(result);

    // checks the password and confirmation
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  // removes any error message
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  // checks if input field is empty

  function emptyFieldValidation(field, label) {
    if (!field) {
      setWarn(alert(label + " cant be blank"));
      setTimeout(() => setWarn(""), 3000);
      return false;
    }
    return true;
  }
  //checks if account exist by checking id email exists
  function checkAccountExist(email) {
    let account = ctx.users.filter((item) => item.email === email);
    return account.length;
  }

  //> the function fires when the user hits submit button on the form
  // ------ info for creating the account gathered here and structured here, we can add more fields and add more values to UserContext and  appropriate "ctx.value" needed from those fields and more state and functions as needed: like address, phone number, birthdate, etc ---------

  async function AccountRegistration(e) {
    e.preventDefault();
    // these two validations need to be refactored into a useEffect/useRef/onFocus
    // checks no empty fields.... this is used for the course rubix. not needed for my form my REGIX and DIsabled button is enough.
    if (!emptyFieldValidation(user, "name")) return;
    if (!emptyFieldValidation(email, "email")) return;
    if (!emptyFieldValidation(pwd, "password")) return;

    // checks if email already exist and alerts the user to use a different email address or login
    if (checkAccountExist(email) > 0) {
      setWarn(
        alert(
          "An account with this email already exist. Please login or use a different email address."
        )
      );
      setTimeout(() => setErrMsg(""), 3000);
      return;
    }

    // checks if the user entered the incorrect information for each field sets the login status to false => no account access
    if (!validName || !validEmail || !validPwd || !validMatch) {
      ctx.register = false;
      return;
    }

    //creates a random last 4 digit account number
    let accountNumber = Math.floor(Math.random() * 10000);

    setAccountNumber(accountNumber);
    console.log("🏦 " + accountNumber);

    // tracks and saves the activities with time stamp
    ctx.transactions.push({
      transactionType: "New account credit",
      amount: 500,
      balance: 500,
      transactionDate: timeStamp,
      stamp: timeStamp,
    });

    // tracks and saves user information and balance
    ctx.users.push({
      user,
      email,
      pwd,
      balance: 500,
      amount: 500,
      created: timeStamp,
      transactionDate: timeStamp,
      transactionType: "New account credit",
      activity: "New account registration",
      accountNumber:  accountNumber ,
      accountType:accountType ,
    });

//################# Firebase################
try {
  const user = await createUserWithEmailAndPassword(
    auth,
    email,
    pwd
  );
  console.log(user);
} catch (error) {
  console.log(error.message);
}

//############# serverconnection ###########################
const response = await fetch("http://localhost:8080/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    user,
    email,
    pwd,
    matchPwd,
    accountType,
  }),
});
const data = await response.json();
console.log(data);

clearForm();

//##########################################
    console.log("🏦 " + accountNumber);

    setShow(false);
    ctx.register = true;
    ctx.login = true; //> this will be used in accountregister
    // setStatus("registered");
  }

  const handleModeSelect = (event) => {
    let userSelection = event.target.value;
    console.log(userSelection);
    setAccountType(userSelection);

  };

  function clearForm() {
    setUser("");
    setEmail("");
    setPwd("");
    setMatchPwd("");
  }
 
 
  return (
    <>
      {show ? (
        <>
          <div className="creataccountform">
            <div className="bg-img">
              {success ? (
                <section className="bg-dark">
                  <h1>Success!</h1>
                  <p>
                    <a href="#SignIn">Sign In</a>
                  </p>
                </section>
              ) : (
                <div className="form-bg registrationForm bg-dark">
                  <Card
                    body={
                      <section className="registrationForm bg-dark">
                        <p
                          ref={errRef}
                          className={errMsg ? "errmsg" : "offscreen"}
                          aria-live="assertive"
                        >
                          {errMsg}
                        </p>
                        <h4 className="formId">
                          Register A New BadBank Account
                        </h4>
                        <form
                          className="form"
                          onSubmit={AccountRegistration}
                        >
                          <label htmlFor="username">
                            Username:
                            <span className={validName ? "valid" : "hide"}>
                              <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span
                              className={
                                validName || !user ? "hide" : "invalid"
                              }
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </span>
                          </label>
                          <input
                            type="text"
                            id="username"
                            value={user}
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                          />
                          <p
                            id="uidnote"
                            className={
                              userFocus && user && !validName
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            Letters, numbers, underscores, hyphens allowed.
                          </p>
                          {/* //<############################## */}
                          <label htmlFor="email">
                            Email:
                            <span className={validEmail ? "valid" : "hide"}>
                              <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span
                              className={
                                validEmail || !email ? "hide" : "invalid"
                              }
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </span>
                          </label>
                          <input
                            type="text"
                            id="email"
                            value={email}
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                          />
                          <p
                            id="uidnote"
                            className={
                              emailFocus && email && !validEmail
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Invalid email format.
                            <br />
                            Please enter a valid email address.
                            <br />
                            ex. example@email.com
                            <br />
                          </p>
                          {/* //<############################## */}
                          <label htmlFor="password">
                            Password:
                            <span className={validPwd ? "valid" : "hide"}>
                              <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span
                              className={validPwd || !pwd ? "hide" : "invalid"}
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </span>
                          </label>
                          <input
                            type="password"
                            id="password"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                          />
                          <p
                            id="pwdnote"
                            className={
                              pwdFocus && !validPwd
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.
                            <br />
                            Must include uppercase and lowercase letters, a
                            number and a special character.
                            <br />
                            Allowed special characters:{" "}
                            <span aria-label="exclamation mark">!</span>{" "}
                            <span aria-label="at symbol">@</span>{" "}
                            <span aria-label="hashtag">#</span>{" "}
                            <span aria-label="dollar sign">$</span>{" "}
                            <span aria-label="percent">%</span>
                          </p>
                          {/* //<############################## */}
                          <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <span
                              className={
                                validMatch && matchPwd ? "valid" : "hide"
                              }
                            >
                              <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span
                              className={
                                validMatch || !matchPwd ? "hide" : "invalid"
                              }
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </span>
                          </label>
                          <input
                            type="password"
                            id="confirm_pwd"
                            value={matchPwd}
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                          />
                          <p
                            id="confirmnote"
                            className={
                              matchFocus && !validMatch
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                          </p>






                          {/* //<############### account type ############### */}
                          <label htmlFor="confirm_pwd">Account Type:</label>
                          <select
                            onChange={(event) => handleModeSelect(event)}
                            name="mode"
                            id="mode-select"
                          >
                            <option id="no-selection" value="">
                              Choose Account Type
                            </option>
                            <option id="checking" value="Checking">
                              Checking
                            </option>
                            <option id="savings" value="Savings">
                              Savings
                            </option>
                          </select>






                          <button
                            className="signup"
                            disabled={
                              !validName ||
                              !validEmail ||
                              !validPwd ||
                              !validMatch
                                ? true
                                : false
                            }
                          >
                            Sign Up
                          </button>
                        </form>
                        <p style={{ color: "white" }}>
                          Already Registered?
                          <br />
                          <Link to="/login" className="formLogin">
                            Login To Your Account
                          </Link>
                        </p>
                      </section>
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* //<############################## */}
          <div className="fs-1 mt-4 text-center">
            <h4>
              Your account has been created successfully.
              <br />
              Please Login to access your account.
            </h4>
          </div>
          <div style={{ background: "grey", height: "50vh" }}>
            <Card
              style={{
                maxWidth: "25rem",
                marginTop: "3rem",
                backgroundColor: "rgb( 30, 33, 36 )",
                width: "100%",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "1rem",
              }}
              header="Create Account"
              // status={status}
              body={
                <>
                  <h5 className="fs-2">Success</h5>
                  <Link
                    to="/login"
                    className="btn btn-primary fs-4 Link"
                    style={{ borderRadius: "0px", marginTop: "1rem" }}
                  >
                    LogIn
                  </Link>
                  <br />
                  <h5 style={{ marginTop: "1rem" }}>
                    Open New Savings Account
                  </h5>
                  <Link
                    to="/logout"
                    className="btn btn-primary fs-2 Link "
                    style={{ borderRadius: "0px", marginTop: "1rem" }}
                  >
                    Create an Account
                  </Link>
                </>
              }
            />
          </div>
        </>
      )}
    </>
  );
}

export default CreateAccount;
