import React from "react";
import Style from "../Styling/GuestSignIn.module.css";
import { Link } from "react-router-dom";
import Login from '../Pages/PBTLoginPage'
export default function guestSignIn() {
  function karanSubmit(e) {
    e.preventDefault();
    const username = document.querySelector("#user");
    const password = document.querySelector("#pass");
    console.log(username.value);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQxNGQ5NjRhY2NiZTFjY2NmOGQyNyIsInVzZXJuYW1lIjoiSm9yZGFuTmV3QWNjb3VudCIsInJvbGUiOiJCYXNpYyIsImlhdCI6MTY3MzMzNjAyNiwiZXhwIjoxNjczMzQ2ODI2fQ.aXenTfsk7C2b5gKYgz18g_SLoFPCj7DqKYyT_OPk-fo"
    );

    let raw = JSON.stringify({
      username: username.value,
      password: password.value,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:4444/api/auth/register", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <div>
      {/* <div className={Style.HeaderContainer}> */}
      {/* <div className={Style.GuestBox}>
          <span className={Style.Guest}>Continue as guest</span>
        </div> */}
      {/* 
        <div className={Style.PbAccountBox}>
          <span className={Style.PbAccount}>PB Account</span>
        </div> */}

      {/* </div> */}
      <div className={Style.MainContainer}>
        <form onSubmit={karanSubmit}>
          <div className={Style.GuestBox}>
            <span className={Style.Guest}>Continue as guest</span>
          </div>
          
          <br />
          <label htmlFor="username" className={Style.username}>
            Username
          </label>
          <br />
          <input type="text" id="user" required className={Style.UserField} />

          <br />
          <br />
          <input
            className={Style.SignIn}
            type="submit"
            value="CONTINUE"
            onClick={karanSubmit}
          />
        </form>
        <div className={Style.RightBox}>
          <div className={Style.PbAccountBox}>
            <span className={Style.PbAccount}>PB Account</span>
          </div>

          <span>
            Please login with your PB account so that you can view and track
            your orders
          </span>

          <Link to='/signin' className={Style.LinkToSignIn}><input className={Style.SignIn} type="submit" value="SIGN IN" /></Link>
          <Link to="/login" className={Style.LinkToRegister}>
          Don't have PB account? Create PB Account
            </Link>
          {/* <a href="/login">Don't have PB account? Create PB Account</a> */}
        </div>
      </div>
    </div>
  );
}
