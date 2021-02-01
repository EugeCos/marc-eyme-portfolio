import styled from '@emotion/styled';

export const Home = styled.div``

// Parallax section ------------------------------
export const ParallaxWrapper = styled.div`
  margin-bottom: 40pt;
`

export const ParallaxOverlay = styled.div`
  position: absolute;
  background: ${p => p.hovered ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.65)'};
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: .4s ease;
`

export const ParallaxContentWrapper = styled.div`
  height: 375pt;
`

export const ParallaxContent = styled.div`
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4.5pt;
  padding: 5pt 10pt;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22.5pt;
  color: #fff;
  letter-spacing: 6pt;
  cursor: pointer;
  transition: .3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.85);
    padding: 5pt 22.5pt
  }
`
// -----------------------------------------------

// About section ---------------------------------
export const AboutWrapper = styled.div`
  margin: 0 auto 30pt;
  width: 420pt;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Headshot = styled.img`
  width: 320pt;
  border-radius: 7.5pt;
  box-shadow: 0px 0px 7.5pt #84817a;
  margin-bottom: 30pt;
`

export const AboutHeader = styled.h2`
  margin-bottom: 20pt;
`

export const AboutDescription = styled.p`
  text-align: center;
  font-size: 115%;
  line-height: 1.6;
  margin-bottom: 20pt;
`
// -----------------------------------------------