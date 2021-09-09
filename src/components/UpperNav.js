import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../img/Main-logo.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import CartBadge from "../utility/CustomizedBadges";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import UserInfo from "../utility/UserInfo";
import "tippy.js/themes/light.css";
import { Offcanvas } from "react-bootstrap";

const UpperNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  return (
    <div>
      <Container>
        <div className="contents">
          <div className="Searchdiv">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className="SearchIcon"
            />
            <SearchIcon />
          </div>
          <div>
            <img src={logo} alt="logo" className="logo-img" />
          </div>
          <div className="iconssection">
            <div className="usersection">
              <AccountCircleOutlinedIcon />
              <span>Demo</span>
              <Tippy
                theme="light"
                content={<UserInfo></UserInfo>}
                interactive={true}
                offset={[5, 17]}
              >
                <ExpandMoreIcon />
              </Tippy>
            </div>
            <div onClick={handleShow}>
              <CartBadge/>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
          </div>
        </div>
      </Container>
      <hr className="nav-border"></hr>
    </div>
  );
};

export default UpperNav;
