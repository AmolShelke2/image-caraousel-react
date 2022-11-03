import React, { useState } from 'react';
import './ImageCarousel.css';

// images importing
import img1 from '../images/cat1.jpeg';
import img2 from '../images/cat2.jpg';
import img3 from '../images/cat3.jpg';
import img4 from '../images/cat4.jpg';
import img5 from '../images/cat5.jpg';
import img6 from '../images/cat6.jpg';

const ImageCarousel = () => {
  let catImageArray = [img1, img2, img3, img4, img5, img6];
  console.log(catImageArray.length);

  const [imgIdx, setIndex] = useState(0);

  const nextSlide = () => {
    if (imgIdx < catImageArray.length - 1) {
      setIndex(imgIdx + 1);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    if (imgIdx > 0) {
      setIndex(imgIdx - 1);
    } else {
      setIndex(catImageArray.length - 1);
    }
  };

  return (
    <div className="image-caraousel">
      {console.log(imgIdx)}
      <button onClick={prevSlide}>Previous</button>
      <img src={catImageArray[imgIdx]} alt="cat-img"></img>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageCarousel;
