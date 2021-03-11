import { useState, useEffect, useContext } from 'react'
import * as s from './Portfolio.style'
import { motion } from 'framer-motion'

// Components
import TwoColumnCarousel from './TwoColumnCarousel'

// Context
import AppContext from 'Context';


const Portfolio = () => {
    // Context
    const context = useContext(AppContext);
    const { darkTheme, palette } = context;

    return (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
            <s.Portfolio>
                {/* Vertical box with photo count */}
                <s.VerticalCounterWrapper darkTheme={darkTheme}>
                    <s.VerticalCounter palette={palette} darkTheme={darkTheme}>
                        <p>1</p>
                        <p>40</p>
                    </s.VerticalCounter>
                </s.VerticalCounterWrapper>

                {/* Two column carousel */}
                <s.TwoColumnCarouselWrapper>
                    <TwoColumnCarousel />
                </s.TwoColumnCarouselWrapper>

                {/* Footer with slider */}
                <s.BottomSliderWrapper darkTheme={darkTheme}>
                    Footer
                </s.BottomSliderWrapper>
            </s.Portfolio>
        </motion.nav>
    )
}

export default Portfolio