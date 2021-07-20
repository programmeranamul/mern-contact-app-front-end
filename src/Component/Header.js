import React, { useState } from "react";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          <span className="navbar-brand">My-Contact</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <span className="nav-link cursor-pointer" onClick={handleShow}>
                About Me
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>About Developer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Hi, I am Anamul.</b> I'm a very passionate, hardworking, curious
            front-end web developer. My goal is to build amazing websites and
            find new stuff constantly. Seeking a challenging yet rewarding
            career with a progressive organization that provides the opportunity
            for development.
          </p>
          <h5 className="mb-0">
            <b>Technical Skills:</b>
          </h5>
          <hr />
          <p>
            <b>Expertise</b> : JavaScript, ES6, React,, Express.js, Rest API,
            React Bootstrap, Bootstrap5, HTML5, CSS3.
          </p>
          <p>
            <b>Comfortable</b> : Node.js, MongoDB, JSON, SASS.
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/anamul-hoque-b90327204"
              target="_blank"
              rel="noreferrer" className="pe-3"
            >
              Linkdin
            </a>
            <a
              href="https://github.com/programmeranamul"
              target="_blank"
              rel="noreferrer" className="pe-3"
            >
              Github
            </a>
            <a
              href="https://github.com/programmeranamul"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://anamul-f70df.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
