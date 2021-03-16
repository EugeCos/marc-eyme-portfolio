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
  width: 100%;
  padding-left: 60pt;
  display: flex;
  align-items: center;
  background-color: ${p => p.darkTheme ? '#161616' : '#fff'};
  color: ${p => p.darkTheme ? '#fff' : '#161616'};
`

export const FilterBox = styled.div`
  position: relative;
  border: 1px solid #2d3436;
  text-transform: uppercase;
  display: inline;
  padding: 10pt 24pt;
  background: #1c1c1c;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
`

export const FilterOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  width: auto;
  padding: 0 30pt;
  cursor: pointer;
  position: relative;
`

export const FilterOptionWrapper = styled.span`
  min-width: 80pt;
  text-align: center;
`

export const FilterOption = styled.p`
  display: inline-block;
  position: relative;

  ${p => p.selected && `
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(1);
      height: 2px;
      bottom: -3pt;
      left: 0;
      background-color: ${p.underlineColor};
      transform-origin: bottom left;
      transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  `};

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -3pt;
    left: 0;
    background-color: #636e72;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
