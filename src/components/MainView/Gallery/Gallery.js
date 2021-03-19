import { useState, useEffect, useContext } from 'react'
import * as s from './Gallery.style'
import { motion } from 'framer-motion'
import { allImages } from '../../../Images'

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
            <s.Gallery>
                {/* Vertical box with photo count */}
                <s.Sidebar darkTheme={darkTheme}>
                    Jora
                </s.Sidebar>

                {/* Two column carousel */}
                <s.GalleryCarousel>
                    CAROUSEL
                </s.GalleryCarousel>

                {/* Footer with slider */}
                <s.Footer darkTheme={darkTheme}>
                    <s.FilterBox>Filters&nbsp;&#8594;</s.FilterBox>
                </s.Footer>
            </s.Gallery>
        </motion.nav>
    )
}

export default Portfolio