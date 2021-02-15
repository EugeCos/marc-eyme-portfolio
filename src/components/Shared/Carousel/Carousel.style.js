import styled from '@emotion/styled';

export const CarouselWrapper = styled.div`
  width: calc(100% - 66pt);
  overflow-x: auto;
  height: calc(100% - 69.5pt);
  display: flex;
  align-items: center;
  padding-left: 6pt;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 8px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 8px rgba(0,0,0,0.5); 
  }

  .image-card {
    height: 100%;
    position: relative;
    flex-shrink: 0;
  }
`

export const SliderImageWrapper = styled.div`
  height: 95%;
  position: relative;
  flex-shrink: 0;
`

export const SliderImage = styled.img`
  cursor: ${p => p.active ? 'grabbing' : 'grab'};
  // transform: ${p => p.active ? 'scale(1)' : 'scale(0.98)'}; add 'selected'
  max-height: 100%;
  margin-right: 7.5pt;
  border-radius: 20px;
  box-shadow: 0 0 4px #d1d8e0;
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