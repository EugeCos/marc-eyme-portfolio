import styled from '@emotion/styled';

export const ContactContainer = styled.div`
  display: flex;
`

// Content section START-----------------------------
export const ContentSection = styled.section`
  width: 55%;
  height: calc(100vh - 69pt);
  position: relative;
  color: #fff;
  box-sizing: border-box;
  padding: 30pt 45pt 90pt;
  border: 3px solid pink
`
// Content section END-------------------------------


// Picture section START-----------------------------
export const PictureSection = styled.section`
  height: calc(100vh - 66pt);
  width: 45%;
  position: relative;
`

export const PictureWrapper = styled.div`
  height: inherit;
  width: 100%;
  position: sticky;
  background-image: url('img/slider/Toronto 04.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const PictureAboutTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  width: 50%;
  bottom: 8%;
  left: 15%;
  background: #00000073;
  border-radius: 10px;
  padding: 10px 26px;
  transition: all .5s ease;

  h1 {
    font-size: 300%;
    margin-bottom: 14px;
    letter-spacing: 3px;
  }

  p {
    font-style: italic;
    font-size: 125%;
  }
`

export const SquareEffectTop = styled.div`
  position: absolute;
  top: 15%;
  right: 15%;
  height: ${p => p.hovered ? '120px': '80px'};
  width: ${p => p.hovered ? '120px': '80px'};
  border-top: 3px solid #333;
  border-right: 3px solid #333;
  transition: .5s ease;
`
// Picture section END-------------------------------