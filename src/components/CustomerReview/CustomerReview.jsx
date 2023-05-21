import { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CustomerReview.css';

const CustomerReview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="customer-review">
      <h2 className='text-center my-5'>Customer Reviews</h2>
      <Container fluid>
        <div className="card-deck">
          <Card data-aos="slide-left" className="review-card">
            <Card.Img className="card-image" variant="top" src="https://img.freepik.com/free-photo/pleased-bearded-man-posing-against-white-wall_176420-32707.jpg" alt="Customer 1" />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                My kids absolutely love the car toys from this website. The quality is outstanding and the attention to detail is remarkable. Highly recommended!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card data-aos="fade-up" className="review-card">
            <Card.Img className="card-image" variant="top" src="https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg" alt="Customer 2" />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>
                As a parent, I am always looking for toys that provide both entertainment and educational value. These car toys tick all the boxes. My children have learned so much about different car models and their features. Great job!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card data-aos="slide-right" className="review-card">
            <Card.Img className="card-image" variant="top" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Customer 3" />
            <Card.Body>
              <Card.Title>David Johnson</Card.Title>
              <Card.Text>
                I ordered a remote-controlled car from this website for my nephews birthday, and he could not be happier. The car performs flawlessly, and the customer service was excellent. Will definitely purchase from here again!
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default CustomerReview;