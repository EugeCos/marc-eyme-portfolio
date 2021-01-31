import * as s from './Footer.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const socialLinks = [
    {
      name: faInstagram,
      url: 'https://www.instagram.com/marc.eyme/'
    },
    {
      name: faFacebook,
      url: 'https://www.facebook.com'
    },
    {
      name: faEnvelope,
      url: 'email'
    }
  ];

  const socialJSX = socialLinks.map((item, index) => {
    return (
      <FontAwesomeIcon
        key={`${index}-${item.name}`}
        icon={item.name}
        color='white'
        style={{ cursor: 'pointer', height: '24px', width: '24px' }}
        onClick={item.url === 'email' ? null : () => window.open(item.url, "_blank")}
      />
    )
  })


  return (
    <s.FooterWrapper>
      <s.ArrowWrapper onClick={() => window.scrollTo(0, 0)}>
        <FontAwesomeIcon icon={faAngleDoubleUp} size='lg' />
      </s.ArrowWrapper>
      <s.SocialIconsContainer>
        <s.SocialIconsWrapper>{socialJSX}</s.SocialIconsWrapper>
      </s.SocialIconsContainer>
    </s.FooterWrapper>
  );
}

export default Footer;