import styled from '@emotion/styled';

export const CarouselWrapper = styled.div`
  width: calc(100% - 66pt);
  overflow-x: hidden;
  height: calc(100% - 69.5pt);
  display: flex;
  align-items: center;
  padding-left: 6pt;

  .image-card {
    height: 100%;
    position: relative;
    flex-shrink: 0;
  }
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
  height: 95%;
  position: relative;
  flex-shrink: 0;
`

export const SliderImage = styled.img`
  cursor: ${p => p.active ? 'grabbing' : 'grab'};
  transform: ${p => p.active ? 'scale(1)' : 'scale(0.98)'};
  max-height: 100%;
  margin-right: 7.5pt;
  border-radius: 20px;
  box-shadow: 0 0 4px #d1d8e0;
  transition: .2s ease-in
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