import React from "react";
import { useState } from "react";
import Style from "../Styling/SignInModal.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function SignInModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
