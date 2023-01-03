import React from "react";
import { HiSearch } from 'react-icons/hi';
import { BsCart3 } from 'react-icons/bs'
import Style from '../Styling/TopNavHomePage.module.css'
export default function TopNavHomePage() {
  return (
    <div className={Style.MainContainer}>
      <ul className={Style.ContainerItems}>
        <li>PB Tech</li>
        <li>Hardwired</li>
        <li>PB Business</li>
        <li>PB Education</li>
        <li>PB Wholesale</li>
        <li>PB Government</li>
        <li>PB Health</li>
        <li>PB IoT</li>
        <li><HiSearch /></li>
        <li><BsCart3 /></li>
      </ul>
    </div>
  );
}
