import { useContext } from 'react'
import * as s from './ScreenSlider.style'

// Framer motion
import { motion, AnimatePresence } from 'framer-motion'

// Context
import AppContext from '../../../Context';


const ScreenSlider = () => {
  // Context
  const context = useContext(AppContext);
  const { openSlider, sliderOpened } = context;


  return (
    <AnimatePresence>
      {sliderOpened && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <s.SliderContainer>
            <s.SliderWrapper>
              <s.CloseIconContainer onClick={() => openSlider(false)}>
                <s.CloseIcon src={'img/icons/close.svg'} />
              </s.CloseIconContainer>
              <s.TempMessage>Photo Slider</s.TempMessage>      
            </s.SliderWrapper>
          </s.SliderContainer>
        </motion.nav>
      )}

    </AnimatePresence>
  );
}

export default ScreenSlider;

