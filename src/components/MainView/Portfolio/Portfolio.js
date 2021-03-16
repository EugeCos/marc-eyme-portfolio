import { useState, useEffect, useContext } from 'react'
import * as s from './Portfolio.style'
import { motion } from 'framer-motion'

// Components
import TwoColumnCarousel from './TwoColumnCarousel'
import BlackButton from 'components/Shared/BlackButton/BlackButton'

// Context
import AppContext from 'Context';


const Portfolio = () => {
    // State
    const [selectedLink, setSelectedLink] = useState('all');


    // Context
    const context = useContext(AppContext);
    const { darkTheme, palette } = context;


    const filterOptions = ['all', 'forest', 'people', 'neon', 'toronto'].map((item, index) => {
    return <s.FilterOptionWrapper 
                key={`${index}-${item}`}
                onClick={() => setSelectedLink(item)} 
                selected={item === selectedLink}  
            >
                <s.FilterOption 
                    selected={selectedLink === item}
                    underlineColor={palette.slider.thumb}
                    darkTheme={darkTheme}
                    >
                        {item}
                </s.FilterOption>
            </s.FilterOptionWrapper>
    })

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
                    <s.FilterBox>Filters&nbsp;&#8594;</s.FilterBox>
                    <s.FilterOptionsWrapper>
                        {filterOptions}
                    </s.FilterOptionsWrapper>
                </s.BottomSliderWrapper>
            </s.Portfolio>
        </motion.nav>
    )
}

export default Portfolio