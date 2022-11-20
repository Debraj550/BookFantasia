import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signout.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Signout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userName");
    window.localStorage.removeItem("userId");
    navigate("/Home");
    window.location.reload();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="cart-page">
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      <div className="signout-container">
        <button onClick={handleClick}>Sign out</button>
      </div>
    </div>
  );
};

export default Signout;
