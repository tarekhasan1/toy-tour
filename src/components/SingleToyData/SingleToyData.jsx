import { Card, Button, Row, Col } from 'react-bootstrap';
import './SingleToyData.css'

const SingleToyData = () => {
    const toyData = [];
  return (
    <Card className='bg-image my-5'>
      <Row  className='d-flex align-items-center justify-content-center'>
        <Col md={8}>
          <div className="p-5">
          <div className="p-5">
          <Card.Img className='rounded-3' variant="top" src="https://imgd.aeplcdn.com/0x0/n/cw/ec/122451/range-rover-sport-exterior-right-front-three-quarter-2.jpeg?isig=0" />
          </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-5 ps-0">
          <div className="p-5 ps-0 -flex align-items-center">
          <Card.Body>
            <Card.Title className='text-secondary fs-3'>Toy Name{toyData.name}</Card.Title>
            <Card.Text className='text-secondary'>Category: {toyData.category}</Card.Text>
            <Card.Text className='text-secondary'>Description: {toyData.description}</Card.Text>
            <Card.Text className='text-secondary'>Seller: {toyData.seller}</Card.Text>
            <Card.Text className='text-secondary'>Rating: {toyData.rating}/5</Card.Text>
            <Card.Text className='text-secondary'>Price: ${toyData.price}</Card.Text>
            <Button variant="warning">Buy Now</Button>
          </Card.Body>
          </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default SingleToyData;
