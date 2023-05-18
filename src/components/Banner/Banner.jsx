import { useEffect, useState } from 'react';
import './Banner.css'

const Banner = () => {
    const [backgroundClass, setBackgroundClass] = useState('background-1');

    useEffect(() => {
      const interval = setInterval(() => {
        setBackgroundClass((prevClass) => {
          if (prevClass === 'banner-1') {
            return 'banner-2';
          } else if (prevClass === 'banner-2') {
            return 'banner-3';
          } else {
            return 'banner-1';
          }
        });
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className='height-control'>
    <div className={backgroundClass} loading="lazy">
      <div className="overlay">
      <div className="banner-content">
        <div className="content-wrapper">
        <h1>Welcome to Toy Tour!</h1>
        <p>Discover a world of fun with our amazing collection of car toys.</p>
        <button className="btn p-3">Have a Tour</button>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
