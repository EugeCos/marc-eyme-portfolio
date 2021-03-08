import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  display: flex;
`

// Picture section START-----------------------------------
export const PictureSection = styled.section`
  height: calc(100vh - 66pt);
  width: 45%;
  position: fixed;
`

export const PictureWrapper = styled.div`
  height: inherit;
  width: 100%;
  // background-image: url(img/headshot_bw.PNG);
  background-image: url(https://www.smartertravel.com/wp-content/uploads/2016/08/travel-tourist-photographer-lens-camera-sunset-1200x627.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const PictureAboutTextWrapper = styled.div`
  position: absolute;
  opacity: ${p => p.hovered ? 1 : 0};
  color: ${p => p.hovered ? '#fff' : '#333'};
  width: 50%;
  bottom: 8%;
  left: 8%;
  ${p => p.hovered && 'background: #00000073'};
  border-radius: 10px;
  padding: 10px 26px;
  transition: all .5s ease;

  h1 {
    font-size: 300%;
    margin-bottom: 14px;
    letter-spacing: 3px;
  }

  p {
    font-style: italic;
    font-size: 125%;
  }
`

export const SquareEffectTop = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  height: ${p => p.hovered ? '120px': '80px'};
  width: ${p => p.hovered ? '120px': '80px'};
  border-top: 3px solid #333;
  border-left: 3px solid #333;
  transition: .5s ease;
`
// Picture section END-----------------------------------


// Description section START-----------------------------
export const DescriptionSection = styled.section`
  width: 55%;
  position: fixed;
  right: 0;
  overflow-y: scroll;
  color: ${p => p.palette.menuItemActive};
  box-sizing: border-box;
  height: auto;
  min-height: calc(100% - 66pt);
  padding: 50pt 100pt 0;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #161616;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #404040;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #575757;
  }
`;

export const DescriptionBlock = styled.div`
  width: 100%;  
  height: calc(100vh - 310pt);
  padding: 20pt 0;
  display: flex;
  flex-direction: column;
`

export const BlockHeader = styled.div`
  border-bottom: 1px solid #57606f;
  padding-bottom: 22.5pt;

`
export const BlockHeaderName = styled.h1`
  text-transform: uppercase;
  font-size: 200%;
  display: inline-block;
`
export const BlockHeaderNumber = styled.h1`
  position: relative; // for grey dash line
  text-transform: uppercase;
  font-size: 180%;
  display: inline-block;
  float: right;
  color: #808e9b;
`
export const GreyDash = styled.span`
  position: absolute;
  top: 11.5pt;
  right: 50pt;
  width: 30pt;
  border-top: 2px solid #808e9b;
`
export const BlockHeaderDescription = styled.p`
  margin-top: 12pt;
  font-style: italic
`

export const BlockContent = styled.div`
  padding: 30pt 0 60pt;
  line-height: 26px;
`

// Content Part One (About)
export const LongDescription = styled.p`
  // max-height: 100px;
  // overflow: scroll
`

export const StatsWrapper = styled.div`
  display: flex;
  padding: 40pt 0;
  justify-content: space-between;
`

export const StatsItem = styled.div`
  text-align: center;
  width: 30%;

  h1{
    display: inline;
    font-size: 250%;
  }
`

export const BlackButton = styled.div`
  position: relative;
  margin: 0 auto;
  border: 1px solid #2f3542;
  text-transform: uppercase;
  display: inline;
  padding: 10pt 24pt;
  background: black;
  letter-spacing: 2px;
  cursor: pointer;
  transition: .3s;
  color: #fff;

  &:hover {
    color: #a4b0be;
    padding-right: 50pt;

    &:before {
      content: '';
      position: absolute;
      right: 15pt;
      top: 50%;
      width: 16pt;
      height: 1px;
      background: #fff;
    }
  }

  &:before {
    transition: .3s;
    content: '';
    position: absolute;
    right: 15pt;
    top: 50%;
    width: 0;
    height: 1px;
    background: #fff;
  }
`
// Description section END-------------------------------


// Bottom links section START----------------------------
export const BottomNavigationSection = styled.section`
  height: 67.5pt;
  width: 55%;
  position: fixed;
  bottom: 0;
  right: 0;
  background: #161616;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BottomLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  width: 300pt;
  cursor: pointer;
  position: relative;

  p {
    width: 25%;
    text-align: center;
  }

  &:nth-of-type(1):hover {
    .underbar {
      ${p => p.hovered === 'about' && 'left: 25px'};
      ${p => p.hovered === 'skills' && 'left: 125px'};
      ${p => p.hovered === 'services' && 'left: 225px'};
      ${p => p.hovered === 'clients' && 'left: 325px'};
    };
  };

  .underbar{
    width: 50px;
    height: 2px;
    background: orange;
    ${p => p.selected === 'about' && 'left: 25px'};
    ${p => p.selected === 'skills' && 'left: 125px'};
    ${p => p.selected === 'services' && 'left: 225px'};
    ${p => p.selected === 'clients' && 'left: 325px'};
    ${p => p.selected && 'font-weight: 600'};
    top: 20px;
    position: absolute;
    -webkit-transition: 0.5s ease;
  }
`

export const BottomNavLink = styled.p`
  ${p => p.selected && `
    font-weight: 600;
    letter-spacing: 2px;
    transition: letter-spacing .3s ease
  `}
`
// Bottom links section END----------------------------