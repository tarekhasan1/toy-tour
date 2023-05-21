/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ShopByCategory.css';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const ShopByCategory = (props) => {
  const sportsCar = props.data[0];
  const classic = props.data[1];
  const offRoad = props.data[2];
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState('');

  const handleClose = () => {
    setShow(false);
    setSelectedItemId('');
  };

  const handleShow = (id) => {
    setSelectedItemId(id);
    setShow(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const viewDetails = (id) => {
    console.log(id);
    navigate(`/all-toys/${id}`);
  };

  const buttonToggle = (id) => {
    console.log(id);
    if (user) {
      viewDetails(id);
    } else {
      handleShow(id);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Shop By Category</h1>
      <Tabs>
        <TabList className="tab-list">
          <Tab>Sports Car</Tab>
          <Tab>Classic</Tab>
          <Tab>Off Road</Tab>
        </TabList>

        <TabPanel>
        <Row className='justify-content-center'>
        {sportsCar.map((card, cardIndex) => (
            <Col className='mt-3' key={cardIndex} lg={4} md={6} sm={12}>
              <Card className='category-card-background' data-aos="fade-up">
                <Card.Img className='image-control' variant="top" src={card.image} alt={card.name} />
                <Card.Body>
                  <Card.Title className='text-secondary text-center'>{card.name}</Card.Title>
                  <Card.Text className='text-success text-center'>Price: {card.price}</Card.Text>
                  <Card.Text className='text-center text-secondary'>Rating: {card.rating}/5</Card.Text>
                  <div className='text-center'>
                  <Button onClick={ () => buttonToggle(card._id)} variant="danger">View Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </TabPanel>
        <TabPanel>
        <Row className='justify-content-center'>
        {classic.map((card, cardIndex) => (
            <Col className='mt-3' key={cardIndex} lg={4} md={6} sm={12}>
              <Card className='category-card-background' data-aos="fade-right">
                <Card.Img className='image-control' variant="top" src={card.image} alt={card.name} />
                <Card.Body>
                  <Card.Title className='text-secondary text-center'>{card.name}</Card.Title>
                  <Card.Text className='text-success text-center'>Price: ${card.price}</Card.Text>
                  <Card.Text className='text-center text-secondary'>Rating: {card.rating}/5</Card.Text>
                  <div className='text-center'>
                  <Button onClick={ () => buttonToggle(card._id)} variant="danger">View Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </TabPanel>
        <TabPanel>
        <Row className='justify-content-center'>
        {offRoad.map((card, cardIndex) => (
            <Col className='mt-3' key={cardIndex} lg={4} md={6} sm={12}>
              <Card className='category-card-background' data-aos="fade-left">
                <Card.Img className='image-control' variant="top" src={card.image} alt={card.name} />
                <Card.Body>
                  <Card.Title className='text-secondary text-center'>{card.name}</Card.Title>
                  <Card.Text className='text-success text-center'>Price: {card.price}</Card.Text>
                  <Card.Text className='text-center text-secondary'>Rating: {card.rating}/5</Card.Text>
                  <div className='text-center'>
                  <Button onClick={ () => buttonToggle(card._id)} variant="danger">View Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </TabPanel>
      </Tabs>

      {/* Modal code */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger text-center'>You are not allowed to see details without login!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center text-secondary'>
          Please, Login! before you see the car details. <span className='text-warning'>Click Okay button below to continue</span> ... <span className='text-success'>Happy Shopping!</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() => viewDetails(selectedItemId)} variant="success">
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShopByCategory;
