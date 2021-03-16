import { useContext, useRef, useEffect, useState } from 'react'
import * as s from './ScreenSlider.style'
import { allImages } from '../../../Images'

// Framer motion
import { motion, AnimatePresence } from 'framer-motion'

// Scroll booster
import ScrollBooster from 'scrollbooster'

// Context
import AppContext from '../../../Context';


const ScreenSlider = () => {
  const [sliderPhotos, setSliderPhotos] = useState([])
  // Context
  const context = useContext(AppContext);
  const { openSlider, sliderOpened, gallerySelected, setGallerySelected } = context;

  // Refs
  const carouselWrapperRef = useRef();
  const viewportRef = useRef();
  const contentRef = useRef();

  // Effects
  useEffect(() => {
    const gallery = allImages[gallerySelected];
    const photos = [];
    
    if(gallery.images) gallery.images.forEach(img => photos.push(img.urlSlideshow))
    setSliderPhotos(photos)
  }, [gallerySelected])

  
  // Initialize carousel scroll booster
  useEffect(() => {
    carouselWrapperRef.current = new ScrollBooster({
      viewport: viewportRef.current,
      content: contentRef.current,    
      direction: "horizontal",
      scrollMode: "transform",
      textSelection: true,
      friction: 0.05,
      emulateScroll: true,
      dragDirectionTolerance: 99,

      // onUpdate: state => {
      //   const posX = Math.round(state.position.x) 
      //   handleCarouselScroll(posX)
      // }
    })
  }, [carouselWrapperRef])


  const handleClose = () => {
    openSlider(false);
    setGallerySelected(false)
  }


  const sliderPhotosJSX = sliderPhotos.map((item, index) => {
    return (
      <s.FullScreenSliderImageWrapper key={`${index}-${item}`} >
        <s.FullScreenSliderImage src={item} />
      </s.FullScreenSliderImageWrapper>
    )
  })
  return (
    <AnimatePresence>
      {sliderOpened && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <s.CarouselWrapper ref={carouselWrapperRef}>
            <s.CloseIconContainer onClick={handleClose}>
              <s.CloseIcon src={'img/icons/close.svg'} />
            </s.CloseIconContainer>
            <s.ArrowIconWrapper position={'left'}>&#8592;</s.ArrowIconWrapper>
            <s.ArrowIconWrapper position={'right'}>&#8594;</s.ArrowIconWrapper>
            <s.Viewport ref={viewportRef}>
              <s.FullScreenSliderContent ref={contentRef}>
                {sliderPhotosJSX}
              </s.FullScreenSliderContent>
              </s.Viewport>
          </s.CarouselWrapper>
        </motion.nav>
      )}

    </AnimatePresence>
  );
}

export default ScreenSlider;

