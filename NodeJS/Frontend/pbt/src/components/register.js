import React from "react";

export default function register() {
  // const form = document.querySelector("form");
  // const username = document.querySelector("#username");
  // const password = document.querySelector("#password");
  // const display = document.querySelector(".error");
  function submit() {
    const form = document.querySelector("form");
    const username = document.querySelector("#user");
    const password = document.querySelector("#pass");
    const display = document.querySelector(".error");
    console.log(username, password)
    if (form) {
      console.log("im being clicked");
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        display.textContent = "";

        try {
          console.log(username, password);
          const res = await fetch("/api/auth/register", {
            
            method: "POST",
            body: JSON.stringify({
              
              username: username.value,
              password: password.value,
            }),
            headers: { "Content-Type": "application/json" },
          });
          
          console.log("it failed");
          const data = await res.json();
          if (res.status === 400 || res.status === 401) {
            return (display.textContent = `${data.message}. ${
              data.error ? data.error : ""
            }`);
          }
          data.role === "admin"
            ? window.location.assign("/admin")
            : window.location.assign("/basic");
        } catch (err) {
          console.log(err.message);
          console.log("I'm right here with ya mate");
        }
      });
    }
  }

  function submit2() {
    const form = document.querySelector("form");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    console.log(username, password);
    const res = fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        
        username: username.value,
        password: password.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
  }

  function karanSubmit(e) {
      e.preventDefault();
      const username = document.querySelector("#user");
      const password = document.querySelector("#pass");
      console.log(username.value)
      let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQxNGQ5NjRhY2NiZTFjY2NmOGQyNyIsInVzZXJuYW1lIjoiSm9yZGFuTmV3QWNjb3VudCIsInJvbGUiOiJCYXNpYyIsImlhdCI6MTY3MzMzNjAyNiwiZXhwIjoxNjczMzQ2ODI2fQ.aXenTfsk7C2b5gKYgz18g_SLoFPCj7DqKYyT_OPk-fo");

let raw = JSON.stringify({
  "username": username.value,
  "password": password.value
});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:4444/api/auth/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={karanSubmit} >
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
        <input type="submit" value="register"  />
        <br />
      </form>
      <a href="/login">Already registered? Login</a>
    </div>
  );
}
