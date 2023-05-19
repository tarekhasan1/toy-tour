import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css';

const products = [
  {
    id: 1,
    name: 'Toy 1',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GF/JI/DZ/102064656/patoys-baby-car-toy-vehicle-4x4-rechargeable-battery-operated-ig-kids-car-1000x1000.jpg',
    ratings: 4.5,
    price: '$19.99',
  },
  {
    id: 2,
    name: 'Toy 2',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GF/JI/DZ/102064656/patoys-baby-car-toy-vehicle-4x4-rechargeable-battery-operated-ig-kids-car-1000x1000.jpg',
    ratings: 3.8,
    price: '$14.99',
  },
  {
    id: 3,
    name: 'Toy 3',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GF/JI/DZ/102064656/patoys-baby-car-toy-vehicle-4x4-rechargeable-battery-operated-ig-kids-car-1000x1000.jpg',
    ratings: 4.5,
    price: '$19.99',
  },
  {
    id: 4,
    name: 'Toy 4',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GF/JI/DZ/102064656/patoys-baby-car-toy-vehicle-4x4-rechargeable-battery-operated-ig-kids-car-1000x1000.jpg',
    ratings: 3.8,
    price: '$14.99',
  },
  {
    id: 5,
    name: 'Toy 5',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GF/JI/DZ/102064656/patoys-baby-car-toy-vehicle-4x4-rechargeable-battery-operated-ig-kids-car-1000x1000.jpg',
    ratings: 4.5,
    price: '$19.99',
  },
  {
    id: 6,
    name: 'Toy 6',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GF/JI/DZ/102064656/patoys-baby-car-toy-vehicle-4x4-rechargeable-battery-operated-ig-kids-car-1000x1000.jpg',
    ratings: 3.8,
    price: '$14.99',
  },
  {
    id: 7,
    name: 'Toy 6',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GF/JI/DZ/102064656/patoys-baby-car-toy-vehicle-4x4-rechargeable-battery-operated-ig-kids-car-1000x1000.jpg',
    ratings: 3.8,
    price: '$14.99',
  },
  {
    id: 8,
    name: 'Toy 6',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GF/JI/DZ/102064656/patoys-baby-car-toy-vehicle-4x4-rechargeable-battery-operated-ig-kids-car-1000x1000.jpg',
    ratings: 3.8,
    price: '$14.99',
  },
  // Add more toy products...
];

const Gallery = () => {
    useEffect(() => {
      AOS.init({
        once: false, // Allow animations to occur multiple times
        mirror: true, // Mirror animations when scrolling up
      });
    }, []);


    const animationEffects = [
        'fade-up',
        'fade-down',
        'fade-left',
        'fade-right',
        'fade-up-right',
        'fade-up-left',
        'fade-down-right',
        'fade-down-left',
        'flip-up',
        'flip-down',
        'flip-left',
        'flip-right',
        'slide-up',
        'slide-down',
        'slide-left',
        'slide-right'
      ];

      const getRandomAnimationEffect = (index) => {
        const effectsLength = animationEffects.length;
        const effectIndex = index % effectsLength;
        return animationEffects[effectIndex];
      };

  return (
    <Container fluid>
    <h1 className='text-center my-5'>Gallery</h1>
      <Row className='mx-5'>
        {products.map((product, index) => (
          <Col key={`product-${index}`} sm={6} md={4} lg={3}>
            <div
              className="gallery-item rounded-3"
              data-aos={getRandomAnimationEffect(index)}
              data-aos-duration="2000"
            >
              <img src={product.image} alt={product.name} className="product-image rounded-3" />
              <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <div className="product-ratings">Ratings: {product.ratings}</div>
                <div className="product-price">Price: {product.price}</div>
                <button className='btn btn-success mt-3'>View Details</button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
