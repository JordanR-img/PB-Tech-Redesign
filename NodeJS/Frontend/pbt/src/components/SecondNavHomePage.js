import React from "react";
import Style from "../Styling/SecondNavHomePage.module.css";
import { FaBars } from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {FaStore} from 'react-icons/fa'
import PB from '../Pages/Assets/pb-logo-alt.svg.png';

export default function SecondNavHomePage() {
  return (
    <div className={Style.BigContainer}>
      {/* {PB} */}
      <img src={PB} alt="PB Tech" class="mainLogo"></img>
      <div className={Style.ContainerItems}>
        
        <ul className={Style.LeftList}>
          
          <li><FaBars /></li>
          <li>Departments</li>
          <li>Brands <MdOutlineKeyboardArrowDown /></li>
          <li>Services <MdOutlineKeyboardArrowDown /></li>
          <li>Promotions</li>
          <li>Hot Deals</li>
          <li>New Arrivals</li>
          <li>Tax Free Shipping</li>
          <li>BYOD</li>
        </ul>
        <ul className={Style.RightList}>
          <li>Returns</li>
          <li>Help & Support</li>
          <li><FaStore/> Stores</li>
        </ul>
      </div>
    </div>
  );
}
