import React from "react";
import PB from "../Pages/Assets/pb-logo-alt.svg.png";
import Style from "../Styling/LoginTopNav.module.css";

import { MdArrowBackIosNew } from "react-icons/md";
export default function LoginTopNav() {
  return (
    <div className={Style.MainContainer}>
      <div className={Style.ContainerItems}>
        <span className={Style.BackToCart}>
          <MdArrowBackIosNew className={Style.arrow} />
          Back to cart
        </span>
        <img src={PB} alt="PB Tech" className={Style.PBlogo}></img>
      </div>
    </div>
  );
}
