import { Card, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./FeaturedToysCard.css";

const FeaturedToysCard = () => {
  const featuredImage = [
    "https://ae01.alicdn.com/kf/HLB1jUuTaDjxK1Rjy0Fnq6yBaFXaN/Four-links-fashion-control-Toy-Car-Simulation-Electric-Remote-Control-Car-Children-Model-Toys-Car-Cross.jpg_Q90.jpg_.webp",
    "https://www.toycompany.pk/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-06-at-8.59.06-PM.jpeg",
    "https://www.babyshop.com/images/405260/card_xlarge.jpg",
  ];

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = [card1Ref, card2Ref, card3Ref];

      cards.forEach((cardRef, index) => {
        const card = cardRef.current;
        if (card) {
          const { top, bottom } = card.getBoundingClientRect();
          const isVisible = top < window.innerHeight && bottom >= 0;

          if (isVisible) {
            switch (index) {
              case 0:
                controls1.start({ scale: 1 });
                break;
              case 1:
                controls2.start({ scale: 1 });
                break;
              case 2:
                controls3.start({ scale: 1 });
                break;
              default:
                break;
            }
          } else {
            switch (index) {
              case 0:
                controls1.start({ scale: 0 });
                break;
              case 1:
                controls2.start({ scale: 0 });
                break;
              case 2:
                controls3.start({ scale: 0 });
                break;
              default:
                break;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

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
            <motion.div
              ref={card1Ref}
              initial={{ scale: 0 }}
              animate={controls1}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <Card className="bg" style={{ marginBottom: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={featuredImage[0]}
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
            </motion.div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <motion.div
              ref={card2Ref}
              initial={{ scale: 0 }}
              animate={controls2}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <Card style={{ marginBottom: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={featuredImage[1]}
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
            </motion.div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <motion.div
              ref={card3Ref}
              initial={{ scale: 0 }}
              animate={controls3}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <Card style={{ marginBottom: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={featuredImage[2]}
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
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeaturedToysCard;
