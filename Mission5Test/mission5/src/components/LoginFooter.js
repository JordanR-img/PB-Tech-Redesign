import React from "react";
import { BiCopyright } from "react-icons/bi";
import Style from '../Styling/LoginFooter.module.css'
export default function LoginFooter() {
  return (
    <div className={Style.MainContainer}>
      <p>
        Copyright <BiCopyright /> PB Technologies Ltd All rights reserved. 587
        Great South Road, Manukau, Auckland, New Zealand
      </p>
      <p>
        PB Technologies Ltd is not responsible for typographical errors. All
        prices and specifications are subject to change without notice.
      </p>
    </div>
  );
}
