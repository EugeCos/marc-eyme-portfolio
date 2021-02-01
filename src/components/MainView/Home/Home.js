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
      url: 'img/par_houses.png',
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
      transition={{ duration: 0.15 }}
    >
      <s.Home>
        <s.ParallaxWrapper>
          { parallaxJSX }
        </s.ParallaxWrapper>

        <s.AboutWrapper>
          <s.Headshot src={'img/headshot.png'}/>
          <s.AboutHeader>ABOUT</s.AboutHeader>        
          <s.AboutDescription>
            Marc is a professional designer, architecture student, and photographer in the Philadelphia area. He started
            teaching himself photography when he began architecture school, utilizing what he learned in classes to
            differentiate his photos. Chris often imagines what could be, rather than what is. This is reflected in his
            surreal and fantastical representation of the city he fell in love with, Philadelphia.
          </s.AboutDescription>
        </s.AboutWrapper>

        <Footer />
      </s.Home>
    </motion.nav>
  );
}

export default Home