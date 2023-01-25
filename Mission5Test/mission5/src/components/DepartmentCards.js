import React from "react";
import Style from '../Styling/CardsDepartment.module.css'
export default function DepartmentCards() {
  const cards = [
    {
      image: "",
      title: "Computers & Tablets",
      list: [
        "Laptops",
        "Desktop PCs",
        "Tablets",
        "Off-Lease PCs",
        "All Categories",
      ],
    },
    {
      image: "",
      title: "PC Peripherals & Accessories",
      list: ["Monitors", "Headsets", "Keyboards", "Cables", "All Categories"],
    },
    {
      image: "",
      title: "PC Parts",
      list: [
        "Video Cards",
        "Internal Storage - SSDs",
        "CPU / Processors",
        "RAM",
        "All Categories",
      ],
    },
    {
      image: "",
      title: "Phones & Accessories",
      list: [
        "Mobile Phones",
        "Mobile Phone Cases",
        "Smart Watches & Wearables",
        "Power Banks",
        "All Categories",
      ],
    },
    {
      image: "",
      title: "Headphones & Audio",
      list: [
        "Headphones & Earphones",
        "Speakers",
        "Pro Audio & Sound Recording",
        "Other Home Audio",
        "All Categories",
      ],
    },
  ];

  return <div className={Style.cardStyle}>{cards.map((info) => {
    return <div className={Style.BigContainer}>{info.image}<span>{info.title}</span><ul> <li className={Style.listStyle}>{info.list}</li></ul></div>
  })}</div>;
}
