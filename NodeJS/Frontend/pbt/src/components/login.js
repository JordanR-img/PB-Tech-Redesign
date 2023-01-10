import React from "react";

export default function login() {
  const form = document.querySelector("form");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const display = document.querySelector(".error");

  function Login() {
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        display.textContent = "";
        try {
            console.log('Im logged in')
          const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
              username: username.value,
              password: password.value,
            }),
            headers: { "Content-Type": "application/json" },
            
          });
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
        }

        console.log("btn clicked");
      });
    }
  }
  //     const form = document.querySelector("form");
  //   const username = document.querySelector("#username");
  //   const password = document.querySelector("#password");
  //   const display = document.querySelector(".error");
  //   form.addEventListener("submit", async (e) => {
  //     e.preventDefault();
  //     display.textContent = "";
  //     try {
  //       const res = await fetch("/api/auth/login", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           username: username.value,
  //           password: password.value,
  //         }),
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       const data = await res.json();
  //       if (res.status === 400 || res.status === 401) {
  //         return (display.textContent = `${data.message}. ${
  //           data.error ? data.error : ""
  //         }`);
  //       }
  //       data.role === "admin"
  //         ? window.location.assign("/admin")
  //         : window.location.assign("/basic");
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   });
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div></div>
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" required />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" required />
        <br />
        <input type="submit" onClick={Login()} value="login" />
        <br />
      </form>
      <a href="/register">Don't have an account? Register</a>
    </div>
  );
}
