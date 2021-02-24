import styled from '@emotion/styled';

export const CarouselWrapper = styled.div`
  width: calc(100% - 66pt);
  overflow-x: hidden;
  height: calc(100% - 69.5pt);
  display: flex;
  align-items: center;
  padding-left: 6pt;
`

export const Viewport = styled.div`
  height: 100%;
  width: 100%;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
`

export const SliderImageWrapper = styled.div`
  height: 100%;
  position: relative;
  flex-shrink: 0;
  cursor: grab;
`

export const SliderImage = styled.img`
  max-height: 100%;
  margin-right: 7.5pt;
  border-radius: 2px;
`

export const SliderImageDataWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 30pt;
  color: #fff;
  display: flex;
  flex-direction: column;
`

export const ImageName = styled.h2`
  cursor: pointer;
  padding-bottom: 10pt;
  transition: .3s ease;
  width: fit-content;
  padding-left: 30pt;
  ${p => p.blackFont && 'color: #333'};
  z-index: 1;

  &:hover {
    text-shadow: 2px 2px 5px #c44569;
  }
`

export const ImageDescription = styled.p`
  font-style: italic;
  font-size: 85%;
  display: inline-block;
  padding-left: 30pt;
  z-index: 1;
  color: #d1ccc0;
`

export const DarkOverlay = styled.div`
  position: absolute;
  width: calc(100% - 9pt);
  bottom: 0;
  height: 100pt;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0) 0,
      rgba(20, 20, 20, 1) 100%
  );
`