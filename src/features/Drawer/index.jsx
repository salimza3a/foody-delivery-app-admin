import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import DrawerStyle from "./drawer.module.css";
function MainDrawer({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button onClick={toggleShow} className={DrawerStyle.addProduct}>
        {name}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className={DrawerStyle.mainCanvas}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body closeButton variant="white">
          {props.drawer}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MainDrawer;
