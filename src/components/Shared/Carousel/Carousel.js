import { useState, useRef } from 'react'
import * as s from './Carousel.style'


const CarouselWithScrollbar = () => {
  // Refs
  const carouselWrapperRef = useRef();


  const sliderPhotos = [
    {
      url: 'img/slider/Toronto 02.jpg',
      name: 'CN Tower',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      url: 'img/slider/Neon 02.jpg',
      name: 'Winter Streetcar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      url: 'img/slider/Neon 06.jpg',
      name: 'Rogers Centre',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      url: 'img/slider/Neon 03.jpg',
      name: 'Exit Red',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      url: 'img/slider/Neon 01.jpg',
      name: 'Exit Red',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      url: 'img/slider/Neon 04.jpg',
      name: 'Exit Red',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
];

  const sliderPhotosJSX = sliderPhotos.map((item, index) => {
    return (
      <s.SliderImageWrapper key={`${index}-${item}`}>
        <s.SliderImage src={item.url} dragable={true} />
        <s.SliderImageDataWrapper>
          <s.ImageName blackFont={item.name === 'to-do'}>{item.name}</s.ImageName>
          <s.ImageDescription blackFont={item.name === 'to-do'}>{item.description}</s.ImageDescription>
        </s.SliderImageDataWrapper>
      </s.SliderImageWrapper>
    )
  })

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleScroll = e => {
    const scrLeft = carouselWrapperRef.current.scrollLeft;
    setScrollLeft(scrLeft)
  }

  const handleMouseDown = e => {
    const offsetLeft = carouselWrapperRef.current.offsetLeft
    const xPosition = e.pageX;

    setIsDown(true)
    setStartX(xPosition - offsetLeft);
  }

  const handleMouseLeave = e => {
    setIsDown(false)
  }

  const handleMouseUp = e => {
    setIsDown(false)
  }

  const handleMouseMove = e => {
    const offsetLeft = carouselWrapperRef.current.offsetLeft;
    if (!isDown) return;
    e.preventDefault();
    const xPosition = e.pageX - offsetLeft;
    const walk = (xPosition - startX) * 3;
    carouselWrapperRef.current.scrollTo({ behavior: 'smooth', left: scrollLeft - walk })
  }


  return (
    <s.CarouselWrapper
      onScroll={handleScroll}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      active={isDown}
      ref={carouselWrapperRef}
    >
      {sliderPhotosJSX}
    </s.CarouselWrapper>
  );
};

export default CarouselWithScrollbar;
