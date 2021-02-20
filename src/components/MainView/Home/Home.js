import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import * as s from './Home.style'
import { motion } from 'framer-motion'

// Slider
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';

// Carousel
import CarouselWithScrollbar from 'components/Shared/Carousel/Carousel'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

// Context
import AppContext from 'Context';


const Home = () => {
  const history = useHistory();

  // Context
  const context = useContext(AppContext);
  const { handleDarkThemeToggle, darkTheme, palette } = context;


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
    console.log("Count: ", count)
    console.log("BP: ", imageBreakpoints)
    console.log("New position: ", newPosition)
    
    
    
    if (newPosition || newPosition === 0) {
      setSliderPosition(newPosition)
    }
  }, [count, imageBreakpoints])


  // Event handlers
  const handleCarouselScroll = value => {
    setSliderPosition(value)
  }


  const handleArrowClick = arrowType => {
    let counter = count;
    if (arrowType === 'increase' && count < imagesWidths.length - 2) counter++;
    else if (arrowType === 'decrease' && count > 1) counter--;
    setCount(counter)
  }


  // https://material-ui.com/components/slider/
  const PhotoSlider = withStyles({
    root: {
      color: palette.slider,
      height: 8,
    },
    thumb: {
      height: 11,
      width: 50,
      backgroundColor: palette.buttons,
      marginTop: -3,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    track: {
      height: 6,
      borderRadius: 4,
    },
    rail: {
      height: 6,
      borderRadius: 4,
    },
  })(Slider);
  

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <s.Home>
        <s.DarkTheme>
          <p style={{ color: palette.menuItemActive }}>Dark theme</p>
          <Switch
            checked={darkTheme}
            color={darkTheme ? 'primary' : 'default'}
            onChange={() => handleDarkThemeToggle(!darkTheme)}
            // name="checkedA"
            // inputProps={{ 'aria-label': 'secondary checkbox' }}
          />

        </s.DarkTheme>
        <s.CarouselContainer>
          <s.VerticalCounterWrapper>
            {/* Vertical box with photo count */}
            <s.VerticalCounter palette={palette} darkTheme={darkTheme}>
              <p>{count}</p>
              <p>{imagesWidths.length}</p>
            </s.VerticalCounter>
          </s.VerticalCounterWrapper>

          {/* Main view */}
          <CarouselWithScrollbar 
            setCarouselScrollWidth={setCarouselScrollWidth}
            setSliderPosition={setSliderPosition}
            setImagesWidth={setImagesWidth}
            sliderPosition={sliderPosition}
          />

          {/* Footer with slider */}
          <s.BottomSliderWrapper>
            <s.CarouselButtonsWrapper palette={palette}>
              <FontAwesomeIcon icon={faCaretLeft} onClick={() => handleArrowClick("decrease")} />              
              <FontAwesomeIcon icon={faCaretRight} onClick={() => handleArrowClick("increase")} />
            </s.CarouselButtonsWrapper>
            <s.CarouselSliderWrapper>
              <Slider
                defaultValue={1}
                color='secondary'
                step={carouselScrollWidth / 300}
                min={1}
                max={carouselScrollWidth / 2}
                onChange={(e, val) => handleCarouselScroll(val)}
                value={sliderPosition}
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