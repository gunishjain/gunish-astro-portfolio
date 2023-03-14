import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from './images';


function CarouselComp(props) {

  const cat=props.category;
  
  const slides=images;
  const filteredImages = slides.filter(image => image.category === cat);
   
  return (
    <Carousel 
        autoPlay
        axis='horizontal'>
            {filteredImages.map((image,idx)=>(
            <div>
                <img alt={idx} src={image.src} />
            </div>
            ))}
    </Carousel>
  )
}

export default CarouselComp