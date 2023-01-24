import React from "react";
import Style from "../Styling/LoginUsers.module.css";
import { useState } from "react";
import axios from 'axios'
import { IoRadioButtonOnOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

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
          console.log("Im logged in");
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
  // function LoginUsers(e) {

  //   e.preventDefault();
  //   const username = document.querySelector("#username");
  //   const password = document.querySelector("#password");
  //   console.log(username.value);

  //   let myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   let raw = JSON.stringify({
  //     username: username.value,
  //     password: password.value,
  //   });

  //   console.log(username, password);
  //   let requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch("http://mern-api:4444/api/auth/login", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // }

  // function LoginUsers(e) {

  //   e.preventDefault();
  //   const username = document.querySelector("#username");
  //   const password = document.querySelector("#password");
  //   console.log(username.value);

  //   let requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     data: {
  //       username: username.value,
  //       password: password.value,
  //     },
  //   };


function LoginUsers(e) {
    e.preventDefault();
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    console.log(username.value);

    let requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: {
            username: username.value,
            password: password.value,
        },
    };

//     axios.post("http://localhost:4444/api/auth/login", requestOptions.data)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log("error", error);
//         });
//       }

    axios.post("http://mern-api:4444/api/auth/login", {
      username: username.value,
      password: password.value,
      }).then((response) => {
      console.log(response);
      })
      .catch((error) => {
      console.log("error", error);
      });
  }


  return (
    <div className={Style.MainContainer}>
      <h1>Sign in to your PB account</h1>
      <form onSubmit={(e) => LoginUsers(e)} className={Style.Form}>
        <label htmlFor="username" className={Style.Username}>
          Username
        </label>
        <br />
        <input type="text" id="username" className={Style.UserField} required />
        <br />
        <label htmlFor="password" className={Style.Password}>
          Password
        </label>
        <br />
        <input
          type="password"
          id="password"
          className={Style.PassField}
          required
        />
        <br />
        <span className={Style.ForgotPassword}>Forgot password?</span> <br />
        <p className={Style.SignedIn}>
          <IoRadioButtonOnOutline className={Style.RadioButton} />
          <span className={Style.Sign}>Keep me signed in</span>
        </p>
        <p className={Style.Security}>
          For your security, we recommend unchecking this box on shared devices.
        </p>
        <div className={Style.ContContainer}>
          <input
            type="submit"
            onClick={(e) => LoginUsers(e)}
            value="CONTINUE"
            className={Style.Continue}
          />
        </div>
{/*         
        <div className={Style.ContContainer}>
          {" "}
          <input
            type="submit"
            onClick={Login()}
            value="CONTINUE"
            className={Style.Continue}
          />
        </div> */}
      
      <span className={Style.DontHave}>
        Don't have PB account?{" "}
        <span className={Style.Create}>Create PB account</span>
      </span>
    
      <p className={Style.FaceBook}>
        <MdOutlineFacebook />
        SIGN IN WITH FACEBOOK
      </p>
      <p className={Style.Google}>
        <FcGoogle />
        SIGN IN WITH GOOGLE
      </p>
      
      </form>
    </div>

  );
}
