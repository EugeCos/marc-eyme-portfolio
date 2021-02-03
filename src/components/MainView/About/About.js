import { useState } from 'react'
import * as s from './About.style'
import { motion } from 'framer-motion'

const About = () => {
  // State
  const [imgHovered, setImgHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState('about');
  const [selectedLink, setSelectedLink] = useState('about');

  const bottomLinksJSX = ['about', 'skills', 'services', 'clients'].map((item, index) => {
    return (
      <s.BottomNavLink
        key={`${index}-${item}`}
        onMouseEnter={() => setHoveredLink(item)}
        onMouseLeave={() => setHoveredLink(selectedLink)}
        onClick={() => setSelectedLink(item)} 
        selected={item === selectedLink}       
      >
        {item}
      </s.BottomNavLink>
    )  
  })


  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <s.AboutContainer>
        <s.PictureContainer onMouseEnter={() => setImgHovered(true)} onMouseLeave={() => setImgHovered(false)}>
          <s.PictureWrapper />
          
          <s.SquareEffectTop hovered={imgHovered} />
          
          <s.PictureAboutTextWrapper hovered={imgHovered}>
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis
              pulvinar.
            </p>
          </s.PictureAboutTextWrapper>
        </s.PictureContainer>

        <s.BottomNavigationWrapper>
          <s.BottomLinksWrapper hovered={hoveredLink} selected={selectedLink}>
            {bottomLinksJSX}
            <div className="underbar" />
          </s.BottomLinksWrapper>
        </s.BottomNavigationWrapper>
      </s.AboutContainer>
    </motion.nav>
  );
}

export default About