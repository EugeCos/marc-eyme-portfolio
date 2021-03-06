import { useState, useContext } from 'react'
import * as s from './About.style'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

// Context
import AppContext from 'Context';


const About = () => {
  const history = useHistory();

  // State
  const [imgHovered, setImgHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState('about');
  const [selectedLink, setSelectedLink] = useState('about');

  // Context
  const context = useContext(AppContext);

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

  // About block
  const ContentPartOne = () => {
    return (
      <>
        <s.LongDescription>
          Glendronach choking hazard zombie courvoisier rabo-de-galo yorsh martell missouri mule imperial corn n' oil. Cutty sark scots whisky, 
          myers missouri mule, lord calvert royal widow; cointreau gibson lynchburg lemonade vesper martini hurricane. Saketini harvey's bristol 
          cream macuá bumbo irish flag--sea breeze; aultmore. Stinger; colombia angel's tit chicago cocktail abhainn dearg springbank caol ila. 
          Royal arrival moscow mule tom and jerry glendronach, madras b & b lemon split, fleischmann's. Seven and seven j & b gin sling.
          <br /><br />
          Margarita culture shock black velvet glendullan canadian club; loch lomond black tooth grin. Gin sling joker tequila sunset vodka gimlet." 
          Kentucky tavern missouri mule mojito patron mojito, aviation midori, imperial quentão. Flirtini, sake manhattan, godfather caol ila 
          auchentoshan the blenheim dewar's scotch whisky, vodka sunrise. Patron pegu stinger captain morgan, colorado bulldog midori captain 
          morgan alexander isle of jura. Hairy virgin vat 69 cardhu; shirley temple black; jameson brandy daisy glen scotia sidecar highland park. 
          Arran culto a la vida kentucky tavern salty dog wine cooler cointreau allt-á-bhainne."
        </s.LongDescription>

        <s.StatsWrapper>
          <s.StatsItem>
            <h1>38</h1>
            <br />
            <i>finished projects</i>
          </s.StatsItem>
          <s.StatsItem>
            <h1>21</h1>
            <br />
            <i>working projects</i>
          </s.StatsItem>
          <s.StatsItem>
            <h1>385</h1>
            <br />
            <i>working hours</i>
          </s.StatsItem>
        </s.StatsWrapper>

        <s.BlackButton onClick={() => history.push('/portfolio')}>My Portfolio</s.BlackButton>
      </>
    )
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <s.AboutContainer>
        {/* Picture section */}
        <s.PictureSection onMouseEnter={() => setImgHovered(true)} onMouseLeave={() => setImgHovered(false)}>
          <s.PictureWrapper />
          
          <s.SquareEffectTop hovered={imgHovered} />
          
          <s.PictureAboutTextWrapper hovered={imgHovered}>
            <h1>About Me</h1>
            <p>Glendronach choking hazard zombie courvoisier rabo-de-galo yorsh martell</p>
          </s.PictureAboutTextWrapper>
        </s.PictureSection>


        {/* Description section */}
        <s.DescriptionSection palette={context.palette}>
          {/* Header */}
          <s.DescriptionBlock>
            <s.BlockHeader>
              <s.BlockHeaderName>My Story</s.BlockHeaderName>
              <s.BlockHeaderNumber>
                <s.GreyDash />
                .01
              </s.BlockHeaderNumber>
              <s.BlockHeaderDescription>Margarita culture shock black velvet glendullan canadian club</s.BlockHeaderDescription>
            </s.BlockHeader>

            {/* Content */}
            <s.BlockContent>
              <ContentPartOne />
            </s.BlockContent>
          </s.DescriptionBlock>

        </s.DescriptionSection>


        {/* Bottom navigation section */}
        <s.BottomNavigationSection>
          <s.BottomLinksWrapper hovered={hoveredLink} selected={selectedLink}>
            {bottomLinksJSX}
            <div className="underbar" />
          </s.BottomLinksWrapper>
        </s.BottomNavigationSection>
      </s.AboutContainer>
    </motion.nav>
  );
}

export default About