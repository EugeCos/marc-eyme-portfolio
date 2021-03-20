import styled from '@emotion/styled';

export const Gallery = styled.div`
  width: 100%;
  height: calc(100vh - 66pt);
  position: relative;
`

export const Sidebar = styled.div`
  position: absolute;
  left: ${p => p.open ? 0 : '-337.5pt'};
  height: auto;
  min-height: calc(100% - 66pt);
  top: 0;
  width: 337.5pt;
  z-index: 5;
  color: ${p => p.palette.menuItemActive};
  box-sizing: border-box;
  background: ${p => p.darkTheme ? '#1c1c1c' : '#fff'};
  padding: 50pt 50pt 0;
  transition: left .3s ease 
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.h1`
  text-transform: uppercase;
  font-size: 200%;
  display: inline-block;
`

export const Content = styled.div`
  padding: 20pt 0;
  line-height: 26px;
`


export const LongDescription = styled.p`
//   max-height: 100px;
//   overflow: scroll
`

export const DetailsWrapper = styled.div`
  display: flex;
  padding: 40pt 0;
  justify-content: space-between;
`

export const Detail = styled.div`
  text-align: center;
  width: 50%;

  p{
    display: inline;
    font-size: 150%;
  }
`

export const GalleryCarousel = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 69.5pt);
`
export const TempImage = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(${p => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
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
  z-index: 6;
  background-color: ${p => p.darkTheme ? '#161616' : '#fff'};
  color: ${p => p.darkTheme ? '#fff' : '#161616'};
`

export const FilterBox = styled.div`
    cursor: pointer;
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
