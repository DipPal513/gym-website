import React from "react";
import { Container, Modal, Nav, Navbar } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const { user, logOut } = useAuth();

  function handleLogOut() {
    logOut();
    history.push("/login");
  }
  return (
    <Navbar
      expand="lg"
      variant="light"
      bg="light"
      className="shadow"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          Get <span className="text-danger fw-bold">ShApe</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} activeClassName="selectedNav" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName="selectedNav" to="/service">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName="selectedNav" to="/contact">
              Contact Us
            </Nav.Link>

            <Nav.Link as={NavLink} activeClassName="selectedNav" to="/about">
              About Us
            </Nav.Link>

            {user.email ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn btn-danger btn-sm"
                >
                  Log Out
                </button>{" "}
                <p className="mb-0 mt-2 ms-3">
                  <img
                    src={user.photoURL}
                    style={{ width: "30px", borderRadius: "50%" }}
                    alt=""
                  />{" "}
                  hello, {user.displayName}
                </p>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                login
              </Nav.Link>
            )}
            {user.email ? (
              ""
            ) : (
              <Nav.Link as={Link} to="/registration">
                Registration
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
