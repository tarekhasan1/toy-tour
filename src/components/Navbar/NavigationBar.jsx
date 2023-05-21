import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './NavigationBar.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import logo from '../../assets/logo.png'

const NavigationBar = () => {
  const {  user, logOut } = useContext(AuthContext);
  console.log('nav user: ', user);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="background-color"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/"> <img className="logo-img" src={logo} alt="" /> <span className="text-danger fw-bold">T</span>oy <span className="text-dark fw-bold">T</span>our</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto me-5">
                <NavLink className={({ isActive }) => (isActive ? "active-route me-4" : "me-4")}
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-route me-4" : "me-4")}
                  to="/all-toys"
                >
                  All Toys
                </NavLink>
                {
                  user &&
                  <NavLink className={({ isActive }) => (isActive ? "active-route me-4" : "me-4")}
                to='/my-toys'
                >
                  My Toys
                </NavLink>
                }
                {
                  user && <NavLink className={({ isActive }) => (isActive ? "active-route me-4" : "me-4")}
                  to="/add-a-toy"
                >
                  Add a Toy
                </NavLink>
                }
                <NavLink className={({ isActive }) => (isActive ? "active-route me-4" : "me-4")}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </Nav>
              <Nav>
              {user ? (
                <div>
                  <div className="d-flex align-items-center">
                  <img
                    className="img-control me-2"
                    src={user.photoURL}
                    alt=""
                    title={user.displayName}
                  />
                  <Link className="d-flex align-items-center text-decoration-none">
                    <Button onClick={handleLogout} variant="danger">
                      Log Out
                    </Button>
                  </Link>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="danger">Log In</Button>
                </Link>
              )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavigationBar;