import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ShopByCategory.css' // Import the CSS file for component styles
import { useEffect } from 'react';

const ShopByCategory = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);


    const carToys =  [
          {
            "id": "1",
            "name": "Super Racer",
            "category": "Sports Cars",
            "price": 19.99,
            "quantity": 10,
            "availability": true,
            "image": "https://shop.landrover.co.uk/media/catalog/product/cache/b48736708e0a728e588d1b7d36da06ea/1/9/191085f15d9094f881ab83b03e4529b7.jpg",
            "ratings": 4.5,
            "seller": "Speedy Toys Inc.",
            "description": "Experience the thrill of speed with the Super Racer! This sleek and stylish sports car is built for high-performance racing. It features a durable body, realistic design, and smooth wheels for fast-paced action. Get ready to race to victory!"
          },
          {
            "id": "2",
            "name": "Monster Truck",
            "category": "Off-Road Vehicles",
            "price": 24.99,
            "quantity": 5,
            "availability": false,
            "image": "https://shop.landrover.co.uk/media/catalog/product/cache/b48736708e0a728e588d1b7d36da06ea/1/9/191085f15d9094f881ab83b03e4529b7.jpg",
            "ratings": 4.2,
            "seller": "Adventurous Toys Co.",
            "description": "Conquer any terrain with the Monster Truck! This rugged off-road vehicle is built to handle the toughest challenges. With its massive tires, powerful suspension, and robust design, it's ready for thrilling off-road adventures. Get ready to unleash the monster within!"
          },
          {
            "id": "3",
            "name": "Convertible Cruiser",
            "category": "Convertible Cars",
            "price": 14.99,
            "quantity": 8,
            "availability": true,
            "image": "https://shop.landrover.co.uk/media/catalog/product/cache/b48736708e0a728e588d1b7d36da06ea/1/9/191085f15d9094f881ab83b03e4529b7.jpg",
            "ratings": 4.0,
            "seller": "Sunny Days Toys",
            "description": "Cruise in style with the Convertible Cruiser! This cool convertible car features a sleek design, removable top, and shiny finish. Whether it's a sunny day or a starry night, you'll enjoy the open road with this stylish ride."
          },
          {
            "id": "4",
            "name": "Race Car",
            "category": "Sports Cars",
            "price": 29.99,
            "quantity": 3,
            "availability": true,
            "image": "https://shop.landrover.co.uk/media/catalog/product/cache/b48736708e0a728e588d1b7d36da06ea/1/9/191085f15d9094f881ab83b03e4529b7.jpg",
            "ratings": 4.8,
            "seller": "SpeedMaster Racing",
            "description": "Get ready for high-speed racing with the Race Car! This sleek and aerodynamic sports car is designed for ultimate performance on the racetrack. With its powerful engine, precise handling, and striking design, it's the perfect choice for aspiring race champions."
          },
          {
            "id": "5",
            "name": "Police Cruiser",
            "category": "Emergency Vehicles",
            "price": 17.99,
            "quantity": 6,
            "availability": true,
            "image": "https://shop.landrover.co.uk/media/catalog/product/cache/b48736708e0a728e588d1b7d36da06ea/1/9/191085f15d9094f881ab83b03e4529b7.jpg",
            "ratings": 4.4,
            "seller": "Safety Toys Ltd.",
            "description": "Enforce the law and protect the city with the Police Cruiser! This sturdy and reliable emergency vehicle is equipped with lights, sirens, and realistic details. Join the brave men and women in blue and keep the streets safe!"
          },
          {
            "id": "7",
            "name": "Speedster GT",
            "category": "Sports Cars",
            "price": 34.99,
            "quantity": 4,
            "availability": true,
            "image": "https://shop.landrover.co.uk/media/catalog/product/cache/b48736708e0a728e588d1b7d36da06ea/1/9/191085f15d9094f881ab83b03e4529b7.jpg",
            "ratings": 4.7,
            "seller": "Velocity Toys",
            "description": "Feel the thrill of the Speedster GT! This high-performance sports car combines style and speed like no other. With its sleek aerodynamic design, powerful engine, and advanced features, it's the perfect choice for car enthusiasts. Get ready to accelerate into the fast lane!"
          }
        ]




  return (
    <div className="container">
    <h1 className='text-center my-5'>Shop By Category</h1>
      <Tabs>
        <TabList className="tab-list">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanel>
        <Row>
        {carToys.map((card, cardIndex) => (
            <Col className='mt-3' key={cardIndex} lg={4} md={6} sm={12}>
              <Card data-aos="fade-up">
                <Card.Img variant="top" src={card.image} alt={card.name} />
                <Card.Body>
                  <Card.Title className='text-secondary text-center'>{card.name}</Card.Title>
                  <Card.Text className='text-success text-center'>Price: {card.price}</Card.Text>
                  <Card.Text className='text-center text-warning'>Rating: {card.ratings}</Card.Text>
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
        <Row>
        {carToys.map((card, cardIndex) => (
            <Col className='mt-3' key={cardIndex} lg={4} md={6} sm={12}>
              <Card data-aos="fade-right">
                <Card.Img variant="top" src={card.image} alt={card.name} />
                <Card.Body>
                  <Card.Title className='text-secondary text-center'>{card.name}</Card.Title>
                  <Card.Text className='text-success text-center'>Price: {card.price}</Card.Text>
                  <Card.Text className='text-center text-warning'>Rating: {card.ratings}</Card.Text>
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
        <Row>
        {carToys.map((card, cardIndex) => (
            <Col className='mt-3' key={cardIndex} lg={4} md={6} sm={12}>
              <Card data-aos="fade-left">
                <Card.Img variant="top" src={card.image} alt={card.name} />
                <Card.Body>
                  <Card.Title className='text-secondary text-center'>{card.name}</Card.Title>
                  <Card.Text className='text-success text-center'>Price: {card.price}</Card.Text>
                  <Card.Text className='text-center text-warning'>Rating: {card.ratings}</Card.Text>
                  <div className='text-center'>
                  <Button variant="danger">View Details</Button>
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
