import styled from '@emotion/styled';

export const Home = styled.div`
  // border: 1px solid red;
  position: relative;
  height: calc(100vh - 66pt)
`

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 0 60pt;
`

export const VerticalCounterWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 67.5pt;
  top: 0;
  width: 60pt;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const VerticalCounter = styled.div`
  background: ${p => p.darkTheme ? '#778beb' : '#1e272e'};
  width: 60pt;
  height: 135pt;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.darkTheme ? '#1e272e' : '#fff'};
  ${p => p.darkTheme && 'font-weight: 600'};

  & > :first-child {
    margin: 0 15pt 15pt 0;
  };
  
  & > :last-child {
    margin-left: 15pt;
    position: relative;

    &::before {
      content: '';
      background: ${p => p.darkTheme ? '#485460' : '#aaa69d'};
      position: absolute;
      top: -10px;
      width: 20px;
      height: 1px;
      left: 50%;
      margin-left: -20px;
      transform: rotate(-45deg);
    }
  }
`

export const CarouselWrapper = styled.div`
  width: auto;
  min-width: 3000px;
  height: calc(100% - 69.5pt);
  display: flex;
  padding-left: 2pt;
`

export const SliderImageWrapper = styled.div`
  height: 100%;
  position: relative;
`

export const SliderImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-right: 7.5pt;
`

export const SliderImageDataWrapper = styled.div`
  position: absolute;
  bottom: 30pt;
  left: 30pt;
  width: 80%;
  color: #fff;
  display: flex;
  flex-direction: column
`

export const ImageName = styled.h2`
  cursor: pointer;
  padding-bottom: 10pt;
  transition: .3s ease;
  width: fit-content;
  ${p => p.blackFont && 'color: #333'};

  &:hover {
    text-shadow: 2px 2px 5px ${p => p.blackFont ? 'grey' : 'red'};
  }
`

export const ImageDescription = styled.p`
  font-style: italic;
  font-size: 85%;
  display: inline-block;
  color: ${p => p.blackFont ? '#333' : '#d1ccc0'}
`

export const BottomSliderWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 67.5pt;
  width: calc(100% - 60pt);
  padding-left: 60pt;
  display: flex;
  align-items: center;
`

export const CarouselButtonsWrapper = styled.div`
  width: 80pt;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > * {
    cursor: pointer;
    border-radius: 50px;
    background: ${p => p.darkTheme ? '#778beb' : '#1e272e'};
    color: ${p => p.darkTheme ? '#1e272e' : '#fff'};
    padding: 9px 14px;
    font-weight: 100
  }
`

export const CarouselSliderWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

// -------------------------------------
// Dark Theme
export const DarkTheme = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 100
`