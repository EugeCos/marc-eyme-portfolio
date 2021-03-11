import { useState, useEffect, useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import * as s from './Home.style'

// Framer motion
import { motion } from 'framer-motion'

// Carousel
import CarouselWithScrollbar from 'components/Shared/Carousel/Carousel'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

// Context
import AppContext from 'Context';


const Home = () => {
  const history = useHistory();

  // Refs
  const sliderRef = useRef()

  // Context
  const context = useContext(AppContext);
  const { darkTheme, palette } = context;


  // State
  const [carouselScrollWidth, setCarouselScrollWidth] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(0)
  const [imagesWidths, setImagesWidth] = useState([])
  const [imageBreakpoints, setImageBreakpoints] = useState([])
  const [count, setCount] = useState(1)


  // Effects
  // Set breakpoints array
  useEffect(() => {
    const breakpoints = [0];
    let sum = 0;
    imagesWidths.forEach(item => {
      const iterationSum = sum += item;
      breakpoints.push(iterationSum);      
    })
    
    setImageBreakpoints(breakpoints)
  }, [carouselScrollWidth, imagesWidths])


  useEffect(() => {
    const newPosition = imageBreakpoints[count - 1];
    if (newPosition || newPosition === 0) {
      // newPosition !== sliderPosition && setSliderPosition(newPosition)
    }
  }, [count, imageBreakpoints])


  // Event handlers
  const handleCarouselScroll = value => {
    if (sliderRef?.current?.valueAsNumber) {
      sliderRef.current.valueAsNumber = value
    }
  }


  const handleSliderChange = e => {
    setSliderPosition(Number(e.target.value))
  }


  const handleArrowClick = arrowType => {
    let counter = count;
    if (arrowType === 'increase' && count < imagesWidths.length) counter++;
    else if (arrowType === 'decrease' && count > 1) counter--;
    setCount(counter)
  }


  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <s.Home>
      {/* Vertical box with photo count */}
      <s.VerticalCounterWrapper darkTheme={darkTheme}>
        <s.VerticalCounter palette={palette} darkTheme={darkTheme}>
          <p>{count}</p>
          <p>{imagesWidths.length}</p>
        </s.VerticalCounter>
      </s.VerticalCounterWrapper>

        <s.CarouselContainer>
          {/* Main view */}
          <CarouselWithScrollbar 
            setCarouselScrollWidth={setCarouselScrollWidth}
            setImagesWidth={setImagesWidth}
            handleCarouselScroll={handleCarouselScroll}
            sliderPosition={sliderPosition}
          />

          {/* Footer with slider */}
          <s.BottomSliderWrapper darkTheme={darkTheme}>
            <s.CarouselButtonsWrapper palette={palette}>
              <FontAwesomeIcon icon={faCaretLeft} onClick={() => handleArrowClick("decrease")} />              
              <FontAwesomeIcon icon={faCaretRight} onClick={() => handleArrowClick("increase")} />
            </s.CarouselButtonsWrapper>
            
            <s.CarouselSliderWrapper>
              <s.Slider
                type='range'
                min={1}
                max={carouselScrollWidth}
                ref={sliderRef}
                palette={palette}
                onChange={e => handleSliderChange(e)}
              />
            </s.CarouselSliderWrapper>
          </s.BottomSliderWrapper>
        </s.CarouselContainer>
        {/* <Footer /> */}
      </s.Home>
    </motion.nav>
  );
}

export default Home