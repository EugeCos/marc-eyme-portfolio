import { useState, useContext } from 'react'
import * as s from './Contact.style'
import { motion } from 'framer-motion'

// Black button
import BlackButton from 'components/Shared/BlackButton/BlackButton'

// Context
import AppContext from 'Context';


const Contact = () => {
    // State
    const [imgHovered, setImgHovered] = useState(false);

    // Context
    const context = useContext(AppContext);

      // About block
    const ContentPartOne = () => {
        return (
        <>
            {/* <p style={{ paddingBottom: '12pt'}}>If you’d like to talk about a project, our work or anything else then get in touch.</p> */}

            {/* Social icons */}
            <s.SocialWrapper>
                <s.SocialIcon src={context.darkTheme ? 'img/icons/map-red.svg' : 'img/icons/map-black.svg'} />
                Toronto, Ontario
            </s.SocialWrapper>
            <s.SocialWrapper>
                <s.SocialIcon src={context.darkTheme ? 'img/icons/mail-red.svg' : 'img/icons/mail-black.svg'} />
                marc-eyme@mail.com
            </s.SocialWrapper>
            <s.SocialWrapper>
                <s.SocialIcon src={context.darkTheme ? 'img/icons/instagram-red.svg' : 'img/icons/instagram-black.svg'} />
                <span onClick={() => window.open('https://www.instagram.com/marc.eyme/', "_blank")}>@marc.eyme</span>
            </s.SocialWrapper>

            {/* Contact form */}
            <s.GetInTouch>Get in touch</s.GetInTouch>
            <s.InputContainer>
                <s.Input placeholder='name' darkTheme={context.darkTheme} />
                <s.Input placeholder='email' darkTheme={context.darkTheme} />
            </s.InputContainer>
            <s.TextareaContainer>
                <s.Textarea placeholder='your message:' darkTheme={context.darkTheme} />
            </s.TextareaContainer>

            {/* Send button */}
            <BlackButton buttonText={'Send Message'}/>
        </>
        )
    }


    return (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
            <s.ContactContainer>
                {/* Content */}
                <s.ContentSection palette={context.palette}>
                    {/* Header */}
                    <s.DescriptionBlock>
                        <s.BlockHeader>
                            <s.BlockHeaderName>Contact Information</s.BlockHeaderName>
                            <s.BlockHeaderDescription>Margarita culture shock black velvet glendullan canadian club</s.BlockHeaderDescription>
                        </s.BlockHeader>

                        {/* Content */}
                        <s.BlockContent>
                            <ContentPartOne />
                        </s.BlockContent>
                    </s.DescriptionBlock>
                </s.ContentSection>

                {/* Picture */}
                <s.PictureSection onMouseEnter={() => setImgHovered(true)} onMouseLeave={() => setImgHovered(false)}>
                    <s.PictureWrapper />
                    <s.SquareEffectTop hovered={imgHovered} />
                </s.PictureSection>
            </s.ContactContainer>
        </motion.nav>
    )
}

export default Contact