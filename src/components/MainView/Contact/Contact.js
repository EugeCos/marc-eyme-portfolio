import { useState } from 'react'
import * as s from './Contact.style'
import { motion } from 'framer-motion'


const Contact = () => {
    // State
    const [imgHovered, setImgHovered] = useState(false);


    return (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
            <s.ContactContainer>
                {/* Content */}
                <s.ContentSection>
                    Content
                </s.ContentSection>

                {/* Picture */}
                <s.PictureSection onMouseEnter={() => setImgHovered(true)} onMouseLeave={() => setImgHovered(false)}>
                    <s.PictureWrapper />

                    <s.SquareEffectTop hovered={imgHovered} />
          
                    <s.PictureAboutTextWrapper hovered={imgHovered}>
                        <h1>Contact Info</h1>
                        <p>Glendronach choking hazard zombie courvoisier rabo-de-galo yorsh martell</p>
                    </s.PictureAboutTextWrapper>
                </s.PictureSection>
            </s.ContactContainer>
        </motion.nav>
    )
}

export default Contact