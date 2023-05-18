import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  return (
    <div>
    <Container className='py-5'>
      <Row>
        <Col md={6}>
          {/* Image */}
         <div className='p-5 mx-auto'>
         <img src="https://imgcdn2.inkydeals.com/wp-content/uploads/2022/08/Login_Page.png" alt="Login" className="img-fluid" />
         </div>
        </Col>
        <Col md={6}>
          {/* Login Form */}
          <div className='p-5 outer-container'>
          <div className='inner-container'>
          <h1 className='text-center my-4'>Login</h1>
          <Form className='mt-2'>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className='mt-3'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className='mt-3'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className='mt-3' variant="danger" type="submit">
              Login
            </Button>
            <br />

            <Button variant="light" className="mt-3">
              <i className='fab fa-google me-2 text-primary'></i>
            Sign in with Google
            </Button>

            <p className='mt-3'>New to Here? Please <Link className='text-success fs-3' to='/register'>Register</Link> </p>
          </Form>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Login;
