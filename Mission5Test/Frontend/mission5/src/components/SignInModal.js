import React from "react";
import { useState } from "react";
import Style from "../Styling/SignInModal.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function SignInModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ul = document.querySelector("ul")
  const getUsers = async () => {
    const res = await fetch("/api/auth/getUsers")
    const data = await res.json()
    data.user.map(mappedUser => {
      if (mappedUser.username !== "admin") {
        let li = `<li> <b>Username</b> => ${mappedUser.username} <br> <b>Role</b> => ${mappedUser.role} </li>`
        ul.innerHTML += li
      } else {
        return null
      }
    })
  }
  getUsers()

  return (
    <div>
      <button onClick={handleShow}>Sign in</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className={Style.ModalBackGround}>
          <div className={Style.imageBox}>
         
            <input placeholder="username" />
            <input placeholder="password" />

            <Button variant="secondary" onClick={handleClose}>
              Submit
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
