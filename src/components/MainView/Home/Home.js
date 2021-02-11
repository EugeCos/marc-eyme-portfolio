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
              <p>1</p>
              <p>4</p>
            </s.VerticalCounter>
          </s.VerticalCounterWrapper>

          {/* Main view */}
          <CarouselWithScrollbar />

          {/* Footer with slider */}
          <s.BottomSliderWrapper>
            <s.CarouselButtonsWrapper palette={palette}>
              <FontAwesomeIcon icon={faCaretLeft} />              
              <FontAwesomeIcon icon={faCaretRight} />
            </s.CarouselButtonsWrapper>
            <s.CarouselSliderWrapper>
            <PhotoSlider />
              {/* <Slider
                defaultValue={1}
                color='secondary'
                // getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                marks
                min={1}
                max={5}
                valueLabelDisplay="auto"
              /> */}
            </s.CarouselSliderWrapper>
          </s.BottomSliderWrapper>
        </s.CarouselContainer>
        {/* <Footer /> */}
      </s.Home>
    </motion.nav>
  );
}

export default Home