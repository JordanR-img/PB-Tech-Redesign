import React from "react";
import LoginTopNav from "../components/LoginTopNav";
import LoginFooter from "../components/LoginFooter";
// import Register from "../components/register";
import LoginUsers from '../components/login'
import Style from '../Styling/PBTLoginPage.module.css'

export default function PBTLoginPage() {
  return (
    <div className={Style.MainContainer}>
      <LoginTopNav />
      <div>
        {/* <Register /> */}
        <LoginUsers />

      </div>
      <div>
        <LoginFooter />
      </div>
    </div>
  );
}
