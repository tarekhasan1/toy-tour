import { Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Blog = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.9, rotate: -5 },
  };

  return (
    <Container className="my-5">
      <h1 className="my-4">Toy Tour - Blog</h1>
      <Row>
        <Col>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="animated-card mb-3">
              <Card.Body>
                <Card.Title className="text-success">
                  1. What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </Card.Title>
                <Card.Text className="text-secondary">
                  An access token is like a key that allows a user or an
                  application to access specific resources, like data or
                  services. It is given by a server after the user or
                  application proves their identity. The access token is
                  temporary and contains information about what the user or
                  application can do. A refresh token is a special key that is
                  given along with the access token. It is used to get a new
                  access token when the current one expires, without the need to
                  log in again. On the client-side, these tokens should be
                  stored securely. This means keeping them in a safe place where
                  other people or malicious software can not easily get to them.
                  Common storage options include encrypted storage or secure
                  cookies.
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
                <Card.Title className="text-success">
                  2. Compare SQL and NoSQL databases?
                </Card.Title>
                <Card.Text className="text-secondary">
                  SQL databases follow a structured and predefined schema with
                  tables, columns, and relationships, making them suitable for
                  structured data with complex queries. They scale vertically by
                  upgrading hardware but struggle with horizontal scalability.
                  Examples include MySQL and PostgreSQL. On the other hand,
                  NoSQL databases offer a flexible schema or no schema at all,
                  making them ideal for unstructured or rapidly changing data.
                  They scale horizontally by adding more servers and excel at
                  fast and scalable data storage. Popular examples include
                  MongoDB and Cassandra.
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
            transition={{ delay: 0.8 }}
          >
            <Card className="animated-card mb-3">
              <Card.Body>
                <Card.Title className="text-success">
                  3. What is express js? What is Nest JS?
                </Card.Title>
                <Card.Text className="text-secondary">
                  Express.js is a lightweight web application framework for
                  Node.js that helps build web servers and APIs. It provides a
                  minimalistic approach with basic features for handling
                  routing, requests, and responses. NestJS, on the other hand,
                  is a progressive Node.js framework that follows a modular and
                  extensible architecture inspired by Angular. It supports
                  TypeScript and offers additional features like dependency
                  injection and built-in support for routing and HTTP handling.
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
            transition={{ delay: 1.2 }}
          >
            <Card className="animated-card mb-3">
              <Card.Body>
                <Card.Title className="text-success">
                  4. What is MongoDB aggregate and how does it work?
                </Card.Title>
                <Card.Text className="text-secondary">
                  MongoDBs aggregation framework allows for data processing and
                  analysis within the database. It uses a pipeline with stages
                  to perform operations on the data, such as filtering and
                  grouping. Each stage in the pipeline performs a specific task,
                  like matching documents or grouping them based on certain
                  fields. It provides a flexible and efficient way to transform
                  and compute data in MongoDB.
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
