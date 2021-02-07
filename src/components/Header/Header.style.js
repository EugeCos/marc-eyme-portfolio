import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 5pt 8pt;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: .3s ease
`

export const Logo = styled.img`
  width: 50pt;
  cursor: pointer;
  border: 1px solid transparent;
`

export const MenuOptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 35%;
`

export const MenuItem = styled.span`
  ${p => p.selected && `
    letter-spacing: 2px;
    font-weight: 600;
  `}
  width: 82.5pt;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.selected ? p.palette.menuItemActive : p.palette.menuItemPassive};
  cursor: pointer;
  transition: letter-spacing .3s ease-out, color .3s ease-out;

  &:hover {
    color: ${p => p.palette.menuItemActive};
  }
`