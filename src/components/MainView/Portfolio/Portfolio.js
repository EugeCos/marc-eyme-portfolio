import { useState, useEffect, useContext } from 'react'
import * as s from './Portfolio.style'
import { motion } from 'framer-motion'
import { allImages } from '../../../Images'

// Components
import TwoColumnCarousel from './TwoColumnCarousel'

// Context
import AppContext from 'Context';


const Portfolio = () => {
    // State
    const [selectedTag, setSelectedTag] = useState('all');
    const [allTags, setAllTags] = useState(['all'])


    // Context
    const context = useContext(AppContext);
    const { darkTheme, palette } = context;


    // Effects
    // Get all tags
    useEffect(() => {
        let newTags = ['all'];

        for(let i in allImages) {
            const imagesArr = allImages[i].images;
            imagesArr.forEach(image => {
                image.tags.forEach(tag => newTags.indexOf(tag) === -1 && newTags.push(tag))
            })
        }

        setAllTags(newTags)
    }, [])


    const filterOptions = allTags.map((item, index) => {
    return <s.FilterOptionWrapper 
                key={`${index}-${item}`}
                onClick={() => setSelectedTag(item)} 
                selected={item === selectedTag}  
            >
                <s.FilterOption 
                    selected={selectedTag === item}
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
                    <TwoColumnCarousel selectedTag={selectedTag}/>
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