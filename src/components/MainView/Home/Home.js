import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as s from './Home.style'
import { motion } from 'framer-motion'

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
            <s.CarouselSliderWrapper>Jora2</s.CarouselSliderWrapper>
          </s.BottomSliderWrapper>
        </s.CarouselWrapper>
        {/* <Footer /> */}
      </s.Home>
    </motion.nav>
  );
}

export default Home