import styled from '@emotion/styled';

export const Home = styled.div`
  // border: 1px solid red;
  position: relative;
  height: calc(100vh - 66pt)
`

export const CarouselWrapper = styled.div`
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
  background: #2f3640;
  width: 60pt;
  height: 135pt;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  & > :first-child {
    margin: 0 15pt 15pt 0;
  };
  
  & > :last-child {
    margin-left: 15pt;
    position: relative;

    &::before {
      content: '';
      background: #aaa69d;
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

export const BottomSliderWrapper = styled.div`
  // border: 1px solid red;
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
    border-radius: 50px;
    background: #2f3640;
    color: #fff;
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