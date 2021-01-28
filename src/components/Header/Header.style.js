import styled from '@emotion/styled';

export const Header = styled.div`
  margin: 0 auto 22.5pt;
  width: 720pt;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 90pt;
  margin-bottom: 18pt;
  cursor: pointer;
  border: 1px solid transparent;
`

export const MenuOptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`

export const MenuItem = styled.span`
  ${p => p.selected && `
    letter-spacing: 2px;
  `}
  width: 82.5pt;
  text-align: center;
  color: ${p => p.selected ? '#2c2c54' : '#aaa69d'};
  font-size: 140%;
  cursor: pointer;
  transition: all .3s ease-out;

  &:hover {
    color: #2c2c54;
  }
`