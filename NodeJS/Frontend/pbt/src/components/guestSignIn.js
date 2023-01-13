import React from "react";
import Style from "../Styling/GuestSignIn.module.css";
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
      <div className={Style.GuestBox}>
        <span className={Style.Guest}>Continue as guest</span>
      </div>

      <div className={Style.PbAccountBox}>
        <span className={Style.PbAccount}>PB Account</span>
      </div>

      <div className={Style.MainContainer}>
       
        <form onSubmit={karanSubmit}>
          <div></div>
          <br />
          <label htmlFor="username">Username</label>
          <br />
          <input type="text" id="user" required />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="pass" required />
          <br />
          <input type="submit" value="register" />
          <br />
        </form>
        <a href="/login">Already registered? Login</a>
      </div>
    </div>
  );
}
