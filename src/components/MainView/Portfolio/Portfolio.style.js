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
  // width: auto;
  padding-left: 60pt;
  display: flex;
  align-items: center;
  background-color: ${p => p.darkTheme ? '#161616' : '#fff'};
  color: #fff;
`

export const FilterBox = styled.div`
  position: relative;
  margin: 0 auto;
  border: 1px solid #2d3436;
  text-transform: uppercase;
  display: inline;
  padding: 10pt 24pt;
  background: #1c1c1c;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
`

export const FilterOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const FilterOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  width: 300pt;
  cursor: pointer;
  position: relative;

  p {
    width: 20%;
    text-align: center;
  }

  &:nth-of-type(1):hover {
    .underbar {
      ${p => p.hovered === 'about' && 'left: 20pt'};
      ${p => p.hovered === 'forest' && 'left: 20pt'};
      ${p => p.hovered === 'people' && 'left: 120pt'};
      ${p => p.hovered === 'neon' && 'left: 180pt'};
      ${p => p.hovered === 'toronto' && 'left: 240pt'};
    };
  };

  .underbar{
    width: 50px;
    height: 2px;
    background: orange;
    ${p => p.selected === 'about' && 'left: 60pt'};
    ${p => p.selected === 'forest' && 'left: 60px'};
    ${p => p.selected === 'people' && 'left: 120pt'};
    ${p => p.selected === 'neon' && 'left: 180pt'};
    ${p => p.hovered === 'toronto' && 'left: 240pt'};
    ${p => p.selected && 'font-weight: 600'};
    top: 20px;
    position: absolute;
    -webkit-transition: 0.5s ease;
  }
`

export const FilterOption = styled.p`
  ${p => p.selected && `
  font-weight: 600;
  letter-spacing: 2px;
  transition: letter-spacing .3s ease
  `}
`