import styled from '@emotion/styled'


export const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #1c1c1c;
  color: grey;
`

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const CloseIconContainer = styled.span`
  position: fixed;
  top: 22.5pt;
  right: 22.5pt;
  width: 30pt;
  height: 30pt;
  cursor: pointer;
  z-index: 5
`

export const CloseIcon = styled.img`
  height: 14px
`

export const ArrowIconWrapper = styled.div`
  ${p => p.position === 'left' && 'left: 22.5pt'};
  ${p => p.position === 'right' && 'right: 22.5pt'};
  color: #636e72;
  font-size: 18pt;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 7pt;
  z-index: 5;
  transition: .3s ease;

  &:hover {
    color: white;
  }
`

// Imags carousel----------------------
export const CarouselWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  height: 100vh;  
  background: black;
  z-index: 100;
`

export const Viewport = styled.div`
  height: 100%;
  width: 100%;
`

export const FullScreenSliderContent = styled.div`  
  height: 100%;
  width: 30000px;
  display: flex;
  // border: 3px solid red;
`

export const FullScreenSliderImageWrapper = styled.div`
  width: 1910px !important;
  text-align: center;
  // border: 4px solid yellow
`

export const FullScreenSliderImage = styled.img`
  max-height: 100%;
  cursor: grab;
`