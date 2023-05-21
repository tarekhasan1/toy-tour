import { Card, Button, Row, Col } from 'react-bootstrap';
import './SingleToyData.css'
import useTitle from '../../routes/Hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const SingleToyData = () => {
  useTitle('Toy Tour | Toy');
  const data = useLoaderData();
  console.log(data);
  return (
    <Card className='bg-image my-5'>
      <Row  className='d-flex align-items-center justify-content-center'>
        <Col md={6}>
          <div className="p-5">
          <div className="p-5">
          <Card.Img className='rounded-3' variant="top" src={data[0].image} />
          </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="p-5 ps-0">
          <div className="p-5 ps-0 -flex align-items-center">
          <Card.Body>
            <Card.Title className='text-secondary fs-3'>{data[0].name}</Card.Title>
            <Card.Text className='text-secondary'>Category: {data[0].category}</Card.Text>
            <Card.Text className='text-secondary'>Description: {data[0].description}</Card.Text>
            <Card.Text className='text-secondary'>Seller: {data[0].seller}</Card.Text>
            <Card.Text className='text-secondary'>Quantity: {data[0].availableQuantity}</Card.Text>
            <Card.Text className='text-secondary'>Rating: {data[0].rating}/5</Card.Text>
            <Card.Text className='text-secondary'>Price: ${data[0].price}</Card.Text>
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
