import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark">
      <Container>
        <Row>
          <Col md={4} className="footer-column text-center">
            <h4>About Us</h4>
            <div><img className='logo-sizing' src={logo} alt="" /></div>
            <p>
              <span className='text-danger'> Toy Tour</span> is a leading online retailer of car toys. We
              offer a wide selection of products for children of all ages.
            </p>
          </Col>
          <Col md={4} className="footer-column text-center">
            <h4>Contact Us</h4>
            <p><span className='fw-semibold'>Email:</span> info@toytour.com</p>
            <p><span className='fw-semibold'>Phone:</span> 123-456-7890</p>
            <p><span className='fw-semibold'>Address:</span> 1/1, Park View, BRUR</p>
            <p>Tajhat thana, Park More, Rangpur.</p>
          </Col>
          <Col md={4} className="footer-column text-center">
            <h4>Follow Us</h4>
            <p>you can find us in most social media, explore-</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">&copy; {currentYear} Toy Tour. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
