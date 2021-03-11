import styled from '@emotion/styled';

export const Portfolio = styled.div`
  width: 100%;
  height: calc(100vh - 66pt);
  position: relative;
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
  z-index: 5;
  background: ${p => p.darkTheme ? '#1c1c1c' : '#fff'};
`

export const VerticalCounter = styled.div`
  background: ${p => p.palette.buttons};
  width: 60pt;
  height: 135pt;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.palette.textVerticalSlider};
  ${p => p.darkTheme && 'font-weight: 600'};

  & > :first-of-type {
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

export const TwoColumnCarouselWrapper = styled.div`
  position: absolute;
  left: 60pt;
  width: 100%;
  height: calc(100% - 69.5pt);
`

export const BottomSliderWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 69.5pt;
  width: calc(100% - 60pt);
  padding-left: 60pt;
  display: flex;
  align-items: center;
  background-color: ${p => p.darkTheme ? '#161616' : '#fff'};
  color: #fff;
`