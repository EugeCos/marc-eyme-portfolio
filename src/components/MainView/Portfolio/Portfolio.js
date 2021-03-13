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
    const [hoveredLink, setHoveredLink] = useState('all');
    const [selectedLink, setSelectedLink] = useState('all');


    // Context
    const context = useContext(AppContext);
    const { darkTheme, palette } = context;

    const filterOptions = ['all', 'forest', 'people', 'neon', 'toronto'].map((item, index) => {
    return <s.FilterOption 
                key={`${index}-${item}`}
                onMouseEnter={() => setHoveredLink(item)}
                onMouseLeave={() => setHoveredLink(selectedLink)}
                onClick={() => setSelectedLink(item)} 
                selected={item === selectedLink}  
            >
                {item}
            </s.FilterOption>
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
                    <s.FilterOptionsContainer>
                    <s.FilterOptionsWrapper hovered={hoveredLink} selected={selectedLink}>
                        {filterOptions}
                        <div className="underbar" />
                    </s.FilterOptionsWrapper>
                    </s.FilterOptionsContainer>
                </s.BottomSliderWrapper>
            </s.Portfolio>
        </motion.nav>
    )
}

export default Portfolio