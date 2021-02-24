import { useRef, useLayoutEffect, useEffect } from 'react'
import * as s from './Carousel.style'
import ScrollBooster from 'scrollbooster'


const CarouselWithScrollbar = ({ 
  setCarouselScrollWidth,
  handleCarouselScroll,
  setImagesWidth,
  sliderPosition = 0
}) => {
  // Refs
  const carouselWrapperRef = useRef();
  const viewportRef = useRef();
  const contentRef = useRef()



  // Effects
  // Update content position if user drages slider or uses arrows
  useEffect(() => {
    // carouselWrapperRef.current.position.x = -sliderPosition;
    carouselWrapperRef.current.scrollTo({ x: sliderPosition, y: 0 })
  }, [carouselWrapperRef.current, sliderPosition])


  // Initialize carousel scroll booster
  useLayoutEffect(() => {
    carouselWrapperRef.current = new ScrollBooster({
      viewport: viewportRef.current,
      content: contentRef.current,    
      direction: "horizontal",
      scrollMode: "transform",
      textSelection: true,
      friction: 0.05,
      emulateScroll: true,
      dragDirectionTolerance: 99,

      onUpdate: state => {
        const posX = Math.round(state.position.x)
        handleCarouselScroll(posX)
      }
    })
  })


  // Set slider range width and set widths for each image
  useEffect(() => {
    // Timeout is needed because CSS loads before JS
    setTimeout(() => {
      if (carouselWrapperRef?.current) {
        // Set total overflow width (edge to edge)
        setCarouselScrollWidth(Math.abs(carouselWrapperRef.current.edgeX.from))
        
        
        // Set width of all children
        const imagesWidths = []
        for (let i of contentRef.current.children) {
          imagesWidths.push(i.offsetWidth)
        }
        setImagesWidth(imagesWidths)
      }
    }, 100)
  }, [carouselWrapperRef?.current?.content?.width, setImagesWidth, setCarouselScrollWidth])


  const sliderPhotos = [
    {
      url: 'img/slider/Toronto 02.jpg',
      name: 'CN Tower',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      url: 'img/slider/Toronto 03.jpg',
      name: 'Winter Streetcar',
      description: 'Lorem ipsum dolor sit amet'
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
    }
];


  const sliderPhotosJSX = sliderPhotos.map((item, index) => {
    return (
      <s.SliderImageWrapper key={`${index}-${item}`}>
        <s.SliderImage src={item.url} />
        <s.SliderImageDataWrapper>
          <s.ImageName blackFont={item.name === 'to-do'}>{item.name}</s.ImageName>
          <s.ImageDescription blackFont={item.name === 'to-do'}>{item.description}</s.ImageDescription>
          <s.DarkOverlay />
        </s.SliderImageDataWrapper>
      </s.SliderImageWrapper>
    )
  })


  return (
    <s.CarouselWrapper ref={carouselWrapperRef}>
      <s.Viewport ref={viewportRef}>
        <s.Content ref={contentRef}>
          {sliderPhotosJSX}
        </s.Content>
      </s.Viewport>
    </s.CarouselWrapper>
  );
};

export default CarouselWithScrollbar;
 