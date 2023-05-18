import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="background-color"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/"> <img className="logo-img" src="https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-letter-t-logo-png-png-image_6111355.png" alt="" /> Toy-Tour</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <NavLink
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/toys"
                >
                  All Toys
                </NavLink>
                <NavLink
                  to="/add-a-toy"
                >
                  Add a Toy
                </NavLink>
                <NavLink
                  to="/blog"
                >
                  Blog
                </NavLink>
              </Nav>
              <Nav>
                  <div>
                    <div className="d-flex align-items-center">
                    <img
                      className="img-control me-2"
                      src="#"
                      alt=""
                      title='name'
                    />
                    <Link className="d-flex align-items-center text-decoration-none">
                      <Button variant="secondary">
                        Log Out
                      </Button>
                    </Link>
                    </div>
                  </div>
                  <Link to="/login">
                    <Button variant="secondary">Log In</Button>
                  </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavigationBar;