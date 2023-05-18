import { Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Blog = () => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
        hover: { scale: 1.1, rotate: 5 },
        tap: { scale: 0.9, rotate: -5 },
      };
    

  return (
    <Container className='my-5'>
      <h1 className="my-4">My Blog</h1>
      <Row>
        <Col>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="animated-card mb-3">
              <Card.Body>
                <Card.Title className='text-secondary'>Blog Post 1</Card.Title>
                <Card.Text className='text-secondary'>
                  This is the content of Blog Post 1. It can be a short description or a preview of the actual blog post.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <Row>
        <Col>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Card className="animated-card mb-3">
              <Card.Body>
                <Card.Title className='text-secondary'>Blog Post 2</Card.Title>
                <Card.Text className='text-secondary'>
                  This is the content of Blog Post 2. It can be a short description or a preview of the actual blog post.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <Row>
        <Col>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <Card className="animated-card mb-3">
              <Card.Body>
                <Card.Title className='text-secondary'>Blog Post 3</Card.Title>
                <Card.Text className='text-secondary'>
                  This is the content of Blog Post 3. It can be a short description or a preview of the actual blog post.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <Row>
        <Col>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <Card className="animated-card mb-3">
              <Card.Body>
                <Card.Title className='text-secondary'>Blog Post 4</Card.Title>
                <Card.Text className='text-secondary'>
                  This is the content of Blog Post 4. It can be a short description or a preview of the actual blog post.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
