import styled from '@emotion/styled';

export const Home = styled.div`
  position: relative;
  height: calc(100vh - 66pt)
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

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 0 60pt;
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
    background: ${p => p.palette.buttons};
    color: ${p => p.palette.textVerticalSlider};
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

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: ${p => p.palette.slider.range};;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 200px;
    height: 5px;
    background: ${p => p.palette.slider.thumb};
  }
`