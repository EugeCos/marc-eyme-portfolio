import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import * as s from './Carousel.style'
import ScrollBooster from 'scrollbooster'


const CarouselWithScrollbar = ({ 
  setCarouselScrollWidth,
  setSliderPosition,
  setImagesWidth,
  sliderPosition = 0
}) => {
  // Refs
  const carouselWrapperRef = useRef();
  const viewportRef = useRef();
  const contentRef = useRef()


  // State
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [clickedImage, setClickedImage] = useState(null)

  
  useLayoutEffect(() => {
    carouselWrapperRef.current = new ScrollBooster({
      viewport: viewportRef.current,
      content: contentRef.current,    
      direction: "horizontal",
      scrollMode: "transform",
      textSelection: true,
      friction: 0.1,
      emulateScroll: true,
      dragDirectionTolerance: 100
    })
  })

  // Effects
  // Set overflow width
  // useEffect(() => {    
  //   if (carouselWrapperRef?.current) {
  //     setCarouselScrollWidth(carouselWrapperRef.current.scrollWidth)

  //     const imagesWidths = []
  //     for (let i of carouselWrapperRef.current.children) {
  //       imagesWidths.push(i.offsetWidth)
  //     }
  //     setImagesWidth(imagesWidths)
  //   }
  // }, [carouselWrapperRef?.current?.scrollWidth, setCarouselScrollWidth])


  // // Set slider position
  // useEffect(() => {
  //   carouselWrapperRef.current.scrollTo({ left: sliderPosition })
  // }, [sliderPosition])


  // Event handlers
  const handleMouseDown = e => {
    const offsetLeft = carouselWrapperRef.current.offsetLeft
    const xPosition = e.pageX - offsetLeft;

    setStartX(xPosition);
    setScrollLeft(carouselWrapperRef.current.scrollLeft)
    setIsDown(true)
  }

  const handleMouseLeave = () => {
    setIsDown(false)
  }

  const handleMouseUp = () => {
    setIsDown(false)
  }

  const handleMouseMove = e => {
    const offsetLeft = carouselWrapperRef.current.offsetLeft;
    if (!isDown) return;
    e.preventDefault();
    const xPosition = e.pageX - offsetLeft;
    const walk = (xPosition - startX) * 2;
    setSliderPosition(scrollLeft - walk)
  }


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
          <s.SliderImage 
            src={item.url}
            active={index === clickedImage}
            // onMouseDown={() => setClickedImage(index)}
            // onMouseUp={() => setClickedImage(null)}
          />
          <s.SliderImageDataWrapper>
            <s.ImageName blackFont={item.name === 'to-do'}>{item.name}</s.ImageName>
            <s.ImageDescription blackFont={item.name === 'to-do'}>{item.description}</s.ImageDescription>
          </s.SliderImageDataWrapper>
        </s.SliderImageWrapper>
    )
  })


  return (
    <s.CarouselWrapper
      // onMouseDown={handleMouseDown}
      // onMouseLeave={handleMouseLeave}
      // onMouseUp={handleMouseUp}
      // onMouseMove={handleMouseMove}
      ref={carouselWrapperRef}
    >
      <s.Viewport ref={viewportRef}>
        <s.Content ref={contentRef}>
          {sliderPhotosJSX}
        </s.Content>
      </s.Viewport>
    </s.CarouselWrapper>
  );
};

export default CarouselWithScrollbar;
 