import { Card, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const FeaturedToysCard = () => {

    const componentRef = useRef(null);
    const controls = useAnimation();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls.start({ scale: 1 });
            }
            else{
                controls.start({ scale: 0})
            }
          });
        },
        { threshold: 0.2 } // Adjust the threshold value as needed
      );

      let ref = componentRef.current;
      observer.observe(ref);
  
      return () => {
        observer.unobserve(ref);
      };
    });


  return (
    <div>
    <div className="px-4">
    <h2 className="mt-4 text-center">Featured Toys</h2>
    <p className="mt-4 text-center">Introducing our exclusive collection of fancy featured toys! Each meticulously crafted toy offers extraordinary play experiences. With vibrant colors, sleek contours, and exceptional craftsmanship, our toys capture attention and withstand hours of play. Spark imagination with captivating backstories, from superheroes to princesses, dinosaurs to robots. Unleash joy and wonder in your children playtime with our fancy featured toys. Let the adventure begin!</p>
    </div>
    <div className="p-5">
    <Row className="justify-content-center">
      <Col md={4} sm={6} xs={12}>
        <motion.div
        ref={componentRef}
          initial={{ scale: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <Card style={{ marginBottom: "1rem" }}>
            <Card.Img
              variant="top"
              src="https://static-01.daraz.com.bd/p/c07307e69187591189495fa3c5e648c2.jpg"
              alt="Featured Toy 1"
            />
            <Card.Body>
              <Card.Title className="text-success">Featured Toy 1</Card.Title>
              <Card.Text className="text-success">
                A fantastic featured toy for kids to enjoy hours of fun!
              </Card.Text>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="btn btn-danger"
              >
                View Details
              </motion.a>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
      <Col md={4} sm={6} xs={12}>
        <motion.div
          initial={{ scale: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <Card style={{ marginBottom: "1rem" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/41wfPfKHplL.jpg"
              alt="Featured Toy 2"
            />
            <Card.Body>
              <Card.Title className="text-success">Featured Toy 2</Card.Title>
              <Card.Text className="text-success">
                Another awesome featured toy for kids to enjoy!
              </Card.Text>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="btn btn-danger"
              >
                View Details
              </motion.a>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
      <Col md={4} sm={6} xs={12}>
        <motion.div
          initial={{ scale: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <Card style={{ marginBottom: "1rem" }}>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/I/513YAGeOjjL.jpg"
              alt="Featured Toy 3"
            />
            <Card.Body>
              <Card.Title className="text-success">Featured Toy 3</Card.Title>
              <Card.Text className="text-success">
                Yet another amazing featured toy for kids to enjoy!
              </Card.Text>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="btn btn-danger"
              >
                View Details
              </motion.a>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    </Row>
    </div>
    </div>
  );
};

export default FeaturedToysCard;
