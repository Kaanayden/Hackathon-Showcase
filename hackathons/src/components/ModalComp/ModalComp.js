import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HackathonForm from '../HackathonForm/HackathonForm';
import "./ModalComp.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalComp({receiveHackathon}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="fixed-btn">
        <Button size="lg" variant="secondary" onClick={handleShow}>
          Add a new hackathon
        </Button>
      </div>
      <Modal 
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title>Enter details of the hackathon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HackathonForm receiveHackathon={receiveHackathon}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;