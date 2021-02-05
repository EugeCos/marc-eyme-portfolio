import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  display: flex;
`

export const PictureContainer = styled.div`
  height: calc(100vh - 65pt);
  width: 45%;
  position: relative;
`

export const PictureWrapper = styled.div`
  height: inherit;
  width: 100%;
  position: sticky;
  background-image: url(img/headshot_bw.PNG);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const PictureAboutTextWrapper = styled.div`
  position: absolute;
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

export const BottomNavigationWrapper = styled.div`
  height: 67.5pt;
  width: 55%;
  position: fixed;
  bottom: 0;
  right: 0;
  background: #1e272e;
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