import React from "react";
import Style from "../Styling/GuestSignIn.module.css";
import TopNav from "../components/LoginTopNav";
import Footer from "../components/LoginFooter";
import MainContent from '../components/guestSignIn'
export default function PBTGuestSignIn() {
  return (
    <div>
      <TopNav />
    <MainContent />
      <Footer />
    </div>
  );
}
