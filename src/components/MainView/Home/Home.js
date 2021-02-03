import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as s from './Home.style'
import { Parallax } from 'react-parallax'
import { motion } from 'framer-motion'

import Footer from 'components/Footer/Footer'


const Home = () => {
  const history = useHistory();

  // State
  const [hoveredIndex, setHoveredIndex] = useState(null)


  // Effects
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const parallaxImages = [
    {
      url: 'img/Neon 06.jpg',
      contentText: 'GALLERY',
      link: 'gallery'
    },
    {
      url: 'img/par_sunset_cut.png',
      contentText: 'ABOUT ME',
      link: 'about-me'
    }
  ]


  const parallaxJSX = parallaxImages.map((item, index) => {
    return (
      <Parallax 
        key={`${index}-${item.link}`}
        bgImage={item.url}
        strength={500}
        renderLayer={() => <s.ParallaxOverlay hovered={index === hoveredIndex} />}          
      >
        <s.ParallaxContentWrapper onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
          <s.ParallaxContent onClick={() => history.push(item.link)}>{item.contentText}</s.ParallaxContent>
        </s.ParallaxContentWrapper>
      </Parallax>
    )
  })


  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <s.Home>
        <s.ParallaxWrapper>
          { parallaxJSX }
        </s.ParallaxWrapper>
        <Footer />
      </s.Home>
    </motion.nav>
  );
}

export default Home