import styled from '@emotion/styled';

export const Gallery = styled.div`
  width: 100%;
  height: calc(100vh - 66pt);
  position: relative;
`

export const Sidebar = styled.div`
  position: absolute;
  left: 0;
  bottom: 67.5pt;
  top: 0;
  width: 337.5pt;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
  background: ${p => p.darkTheme ? '#1c1c1c' : '#fff'};
  border: 3px solid yellow
`

export const GalleryCarousel = styled.div`
  position: absolute;
  left: 60pt;
  width: 100%;
  height: calc(100% - 69.5pt);
`

export const Footer = styled.div`
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
