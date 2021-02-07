import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import * as s from './Home.style'
import { motion } from 'framer-motion'

// Slider
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';

// import Footer from 'components/Footer/Footer'
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


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
  ];

  const sliderPhotosJSX = sliderPhotos.map((item, index) => {
    return (
            <s.SliderImageWrapper key={`${index}-${item}`}>
              <s.SliderImage src={item.url} />
              <s.SliderImageDataWrapper>
                <s.ImageName blackFont={item.name === 'to-do'}>{item.name}</s.ImageName>
                <s.ImageDescription blackFont={item.name === 'to-do'}>{item.description}</s.ImageDescription>
              </s.SliderImageDataWrapper>
            </s.SliderImageWrapper>
    )
  })

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
          <s.CarouselWrapper>
            {sliderPhotosJSX}        
            {/* <Carousel responsive={responsive}>
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
              <div>Item 4</div>
            </Carousel>; */}
          </s.CarouselWrapper>


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