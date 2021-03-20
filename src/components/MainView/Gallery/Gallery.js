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


    // State
    const [gallery, setGallery] = useState(null)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    

    //Effects
    // Set gallery
    useEffect(() => {
        const url = window.location.pathname;
        const n = url.lastIndexOf('/');
        const gal = url.substring(n + 1);
        setGallery(allImages[gal])
    }, [])

console.log(gallery)
    return (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
            <s.Gallery>
                {/* Vertical box with photo count */}
                <s.Sidebar darkTheme={darkTheme} palette={palette} open={isSidebarOpen}>
                    <s.ContentWrapper>
                        <s.Header>{gallery?.name}</s.Header>

                        {/* Content */}
                        <s.Content>
                            <s.LongDescription>{gallery?.longDescription}</s.LongDescription>

                            <s.DetailsWrapper>
                                <s.Detail>
                                    <p>{gallery?.location}</p>
                                    <br />
                                    <i>Location</i>
                                </s.Detail>
                                <s.Detail>
                                    <p>{gallery?.camera}</p>
                                    <br />
                                    <i>Camera</i>
                                </s.Detail>
                            </s.DetailsWrapper>
                        </s.Content>
                    </s.ContentWrapper>
                </s.Sidebar>

                {/* Two column carousel */}
                <s.GalleryCarousel>
                    {/* <s.TempImage src={gallery?.images[0].urlContent} /> */}
                    <s.TempImage backgroundImage={'https://peachclinics.com.au/wordpress/wp-content/uploads/2018/07/redheaded-girl-1140px.jpg'} />
                </s.GalleryCarousel>

                {/* Footer with slider */}
                <s.Footer darkTheme={darkTheme}>
                    <s.FilterBox onClick={() => setIsSidebarOpen(!isSidebarOpen)}>{isSidebarOpen ? 'Hide' : 'Show'} Details</s.FilterBox>
                </s.Footer>
            </s.Gallery>
        </motion.nav>
    )
}

export default Portfolio