import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as s from './Home.style'
import { motion } from 'framer-motion'
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

// import Footer from 'components/Footer/Footer'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const history = useHistory();


  

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <s.Home>
        <s.CarouselWrapper>
          <s.VerticalCounterWrapper>
            <s.VerticalCounter>
              <p>1</p>
              <p>3</p>
            </s.VerticalCounter>
          </s.VerticalCounterWrapper>

          <s.BottomSliderWrapper>
            <s.CarouselButtonsWrapper>
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
        </s.CarouselWrapper>
        {/* <Footer /> */}
      </s.Home>
    </motion.nav>
  );
}

export default Home


// https://material-ui.com/components/slider/
const PhotoSlider = withStyles({
  root: {
    color: '#222f3e',
    height: 8,
  },
  thumb: {
    height: 11,
    width: 50,
    backgroundColor: '#222f3e',
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