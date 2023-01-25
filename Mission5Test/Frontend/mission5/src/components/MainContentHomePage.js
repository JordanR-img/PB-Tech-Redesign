import React from 'react'
import Style from '../Styling/Departments.module.css'
import DepartmentCards from './DepartmentCards'
export default function MainContentHomePage() {
  return (
    <div className={Style.BigContainer}><h3>All Departments</h3> <hr className={Style.Line} /><div className={Style.Cards}><DepartmentCards /></div></div>
  )
}
