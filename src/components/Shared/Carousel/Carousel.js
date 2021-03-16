import { useRef, useLayoutEffect, useEffect, useContext, useState } from 'react'
import * as s from './Carousel.style'
import { allImages } from '../../../Images'
import ScrollBooster from 'scrollbooster'

// Context
import AppContext from 'Context';


const CarouselWithScrollbar = ({ 
  setCarouselScrollWidth,
  handleCarouselScroll,
  setImagesWidth,
  sliderPosition = 0
}) => {
  // Refs
  const carouselWrapperRef = useRef();
  const viewportRef = useRef();
  const contentRef = useRef();


  // Context
  const context = useContext(AppContext);
  const { openSlider, setGallerySelected } = context;


  // State
  const [sliderPhotos, setSliderPhotos] = useState([])

  // Effects
  // Update content position if user drages slider or uses arrows
  useEffect(() => {
    carouselWrapperRef.current.position.x = -sliderPosition;
    // carouselWrapperRef.current.scrollTo({ x: sliderPosition, y: 0 })
  }, [sliderPosition])


  // Set slider galleries
  useEffect(() => {
    const galleries = [];

    for(let item in allImages) {
      const gal = allImages[item]
      const newGallery = {};
      newGallery.name = gal.name;
      newGallery.description = gal.description;
      newGallery.url = gal.images[0].urlContent;
      galleries.push(newGallery)
    }

    setSliderPhotos(galleries)
  }, [])


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


  const handleZoomClick = (e, gallery) => {
    e.preventDefault()
    openSlider(true)
    setGallerySelected(gallery)
  }


  const sliderPhotosJSX = sliderPhotos.map((item, index) => {
    return (
      <s.SliderImageWrapper key={`${index}-${item}`}>
        <s.SearchIconContainer onClick={e => handleZoomClick(e, item.name.toLowerCase())}>
          <s.SearchIcon src={'img/icons/search.svg'} />
        </s.SearchIconContainer>
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
 