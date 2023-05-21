import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const loadData = async()=>{
      try{
        const loadedData = await fetch(`${import.meta.env.VITE_SERVER_API}/cars`)
      const data = await loadedData.json();
      setData(data);
      setLoading(false);
      }
      catch(error){
        console.log(error);
        setLoading(false);
      }
    };
    loadData();
  },[])

  // const cars = data.slice(0, 8);



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
    <h1 className='text-center mt-5'>Gallery</h1>
    <p className='text-center mb-5'>Have a look on our gallery! there are lots of amazing toy cars of different categories you will find here.</p>
      <Row className='mx-5'>
        {!loading && data.slice(0, 8).map((product, index) => (
          <Col key={`product-${index}`} sm={6} md={4} lg={3}>
            <div
              className="gallery-item rounded-3"
              data-aos={getRandomAnimationEffect(index)}
              data-aos-duration="2000"
            >
              <img src={product.image} alt={product.name} className="product-image rounded-3" />
              <div className="product-details">
                <h2 className="product-name text-center">{product.name}</h2>
                
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
