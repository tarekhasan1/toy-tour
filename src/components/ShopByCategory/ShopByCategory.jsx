/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ShopByCategory.css' // Import the CSS file for component styles
import { useEffect } from 'react';

const ShopByCategory = (props) => {
  console.log('shop by', props.data);
  const sportsCar = props.data[0];
  console.log(sportsCar);
  // eslint-disable-next-line react/prop-types
  const classic = props.data[1];
  console.log(classic);
  const offRoad = props.data[2];
  console.log(offRoad);

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);


      const handleViewDetails = (id) =>{
        console.log(id);
      }



  return (
    <div className="container">
    <h1 className='text-center my-5'>Shop By Category</h1>
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
              <Card data-aos="fade-up">
                <Card.Img className='image-control' variant="top" src={card.image} alt={card.name} />
                <Card.Body>
                  <Card.Title className='text-secondary text-center'>{card.name}</Card.Title>
                  <Card.Text className='text-success text-center'>Price: {card.price}</Card.Text>
                  <Card.Text className='text-center text-secondary'>Rating: {card.rating}/5</Card.Text>
                  <div className='text-center'>
                  <Button variant="danger">View Details</Button>
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
                  <Button variant="danger">View Details</Button>
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
              <Card data-aos="fade-left">
                <Card.Img className='image-control' variant="top" src={card.image} alt={card.name} />
                <Card.Body>
                  <Card.Title className='text-secondary text-center'>{card.name}</Card.Title>
                  <Card.Text className='text-success text-center'>Price: {card.price}</Card.Text>
                  <Card.Text className='text-center text-secondary'>Rating: {card.rating}/5</Card.Text>
                  <div className='text-center'>
                  <Button onClick={() => handleViewDetails(card._id)} variant="danger">View Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
