import { Card, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./FeaturedToysCard.css";
import featured1 from '../../assets/featured-image/featured1.png';
import featured2 from '../../assets/featured-image/featured2.png';
import featured3 from '../../assets/featured-image/featured3.png';
import { useEffect } from "react";

const FeaturedToysCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="px-4">
        <h2 className="mt-4 text-center">Featured Toys</h2>
        <p className="mt-4 text-center">
          Introducing our exclusive collection of fancy featured toys! Each
          meticulously crafted toy offers extraordinary play experiences. With
          vibrant colors, sleek contours, and exceptional craftsmanship, our
          toys capture attention and withstand hours of play. Unleash joy and
          wonder in your children playtime with our fancy featured toys. Let the
          adventure begin!
        </p>
      </div>
      <div className="p-5">
        <Row className="justify-content-center">
          <Col md={4} sm={6} xs={12}>
            <div data-aos="slide-left">
              <Card className="bg" style={{ marginBottom: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={featured1}
                  alt="Featured Toy 1"
                />
                <Card.Body>
                  <Card.Title className="text-secondary text-center">
                    Sports Car
                    <span className="text-danger text-right fs-2"> New!</span>
                  </Card.Title>
                  <Card.Text className="text-success">
                    You will get plenty of fantastic sports car toy for kids to
                    enjoy hours of fun!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div data-aos="fade-down">
              <Card style={{ marginBottom: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={featured2}
                  alt="Featured Toy 2"
                />
                <Card.Body>
                  <Card.Title className="text-secondary text-center">
                    Metal Body Realistic Cars{" "}
                    <span className="text-danger text-right fs-2">New!</span>
                  </Card.Title>
                  <Card.Text className="text-success">
                    We got some realistic remote control car, Your kid will love
                    it!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div data-aos="slide-right">
              <Card style={{ marginBottom: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={featured3}
                  alt="Featured Toy 3"
                />
                <Card.Body>
                  <Card.Title className="text-secondary text-center">
                    Sleeper Coach
                    <span className="text-danger text-right fs-2"> New!</span>
                  </Card.Title>
                  <Card.Text className="text-success">
                    Yet another amazing type of Bus or Coach toy for kids to
                    enjoy!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeaturedToysCard;
