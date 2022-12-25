import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../src/asset/img/oyotee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";

const Header = () => {
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" className="d-block">
          <div className="row">
            <div className="col-md-2">
              <Navbar.Brand href="/">
                <img src={logo} alt="logo" />
                OYOTEE
              </Navbar.Brand>
            </div>
            <div className="col-md-10 text-end">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="text-start">
                <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                  <Nav.Link href="#shop" className="active">
                    Shop
                  </Nav.Link>
                  <Nav.Link href="#plant-care"> Plant Care</Nav.Link>
                  <Nav.Link href="#workshops">Workshops</Nav.Link>
                  <Nav.Link href="#blogs">Blogs</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#cart">
                    <Badge badgeContent={4} color="primary">
                      <FontAwesomeIcon icon={faBagShopping} />
                    </Badge>
                  </Nav.Link>
                  <Nav.Link href="#wishlist">
                    <FontAwesomeIcon icon={faHeart} />
                  </Nav.Link>
                  <Nav.Link href="#user" className="user-circle">
                    <FontAwesomeIcon icon={faUser} />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Navbar>
      </Container>
      <hr className="my-0" />
    </>
  );
};

export default Header;
