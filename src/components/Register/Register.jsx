
import { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {
    const { user,createUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleRegister = async (event) => {
        event.preventDefault();
        setError("");
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
    
        console.log(name, email, photo, password);
    
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError("Please add at least two uppercase");
          return;
        } else if (!/(?=.*[0-9])/.test(password)) {
          setError("Please add at least one digits");
          return;
        } else if (password.length < 6) {
          setError("Please add at least 6 character in your password");
          return;
        }
    
        try {
          await createUser(email, password, name, photo);
          console.log(user);
          navigate("/");
        } catch (err) {
          console.log(err);
          setError(err.message);
        }
      };



  return (
    <Container className='my-5 px-5'>
      <Row className='my-5 p-2'>
        <Col md={6} className="image-section">
          {/* Replace the 'image.jpg' with the path to your desired image */}
          <img src="https://imgcdn2.inkydeals.com/wp-content/uploads/2022/08/Login_Page.png" alt="Registration" className="img-fluid w-75" />
        </Col>
        <Col md={6} className="form-section">
          <h1 className='mt-3'>Create an Account</h1>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="name">
              <Form.Label className='mt-3'>Name:</Form.Label>
              <Form.Control type="text" placeholder='Your Name' name='name' required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label className='mt-3'>Email:</Form.Label>
              <Form.Control type="email" placeholder='Enter Your Email' name='email' required/>
            </Form.Group>
            <Form.Group controlId="photoUrl">
              <Form.Label className='mt-3'>Photo Url:</Form.Label>
              <Form.Control type="text" placeholder='Your Photo Url' name='photo' required/>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className='mt-3'>Password:</Form.Label>
              <Form.Control type="password" placeholder='Enter Your Password' name='password' required/>
            </Form.Group>
            <Button className='mt-3' variant="danger" type="submit">
              Register
            </Button>
            <br />
            <p className="text-danger">{error}</p>
          <p></p>
            <p className='mt-3'>Already have an account? <Link className='fs-3 text-success' to="/login">Login</Link> </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
