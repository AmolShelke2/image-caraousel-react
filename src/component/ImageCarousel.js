import React from 'react';
import './ImageCarousel.css';

// images importing
import img1 from '../images/cat1.jpeg';
import img2 from '../images/cat2.jpg';
import img3 from '../images/cat3.jpg';
import img4 from '../images/cat4.jpg';
import img5 from '../images/cat5.jpg';
import img6 from '../images/cat6.jpg';

const ImageCarousel = () => {
  const catImageArray = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="image-caraousel">
      <button>Previous</button>
      <img src={catImageArray[0]} alt="cat-img"></img>
      <button>Next</button>
    </div>
  );
};

export default ImageCarousel;
