import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  margin: 0 auto;
  background: ${p => p.palette.headerBg};
  padding: 18pt 66pt;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: .3s ease;
  z-index: 10
`

export const Logo = styled.div`
  cursor: pointer;
  color: ${p => p.palette.menuItemActive};
  font-weight: 600;
  font-family: 'Wire One', sans-serif;
  letter-spacing: 4px;
  font-size: 220%;
  padding-bottom: 4.5pt;

  span {
    color: ${p => p.palette.slider.thumb}
  }
`

export const MenuOptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 35%;
`

export const MenuItem = styled.span`
  ${p => p.selected && `
    letter-spacing: 2px !important;
  `}
  width: 100pt;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  color: ${p => p.selected ? p.palette.menuItemActive : p.palette.menuItemPassive};
  cursor: pointer;
  transition: letter-spacing .3s ease-out, color .3s ease-out;

  &:hover {
    color: ${p => p.palette.menuItemActive};
  }
`