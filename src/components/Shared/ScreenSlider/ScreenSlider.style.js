import styled from '@emotion/styled'


export const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #1c1c1c;
  color: grey;
  z-index: 1000;
`

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const TempMessage = styled.h1`
  position: absolute;
  position: absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 400%;
  letter-spacing: 10px;
`

export const CloseIconContainer = styled.span`
  position: absolute;
  top: 22.5pt;
  right: 22.5pt;
  width: 30pt;
  height: 30pt;
  background: #636e72;
  border-radius: 100%;
  cursor: pointer;
  transition: all 200ms linear;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CloseIcon = styled.img`
  height: 14px
`