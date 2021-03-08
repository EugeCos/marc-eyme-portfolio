import styled from '@emotion/styled';

export const ContactContainer = styled.div`
  display: flex;
`

// Content section START-----------------------------
export const ContentSection = styled.section`
  width: 55%;
  height: auto;
  min-height: calc(100% - 66pt);
  overflow-y: scroll;
  position: fixed;
  color: ${p => p.palette.menuItemActive};
  box-sizing: border-box;
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
`

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

export const BlockHeaderDescription = styled.p`
  margin-top: 12pt;
  font-style: italic
`

export const BlockContent = styled.div`
  padding: 30pt 0 60pt;
  line-height: 26px;
`

// Content Part One (About)
export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12pt;
  text-transform: uppercase;

  span {
    cursor: pointer;
    transition: .3s ease;

    &:hover {
      color: #eb3b5a
    }
  }
`

export const SocialIcon = styled.img`
  height: 20pt;
  margin-right: 18pt;
`

export const GetInTouch = styled.h1`
  margin: 40pt 0 18pt;
  text-transform: uppercase
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20pt;
`

export const Input = styled.input`
  background: #FFFFFF1A;  
  border: 1px solid ${p => p.darkTheme ? 'transparent' : '#d1ccc0'};
  padding: 20px 30px;
  color: ${p => p.darkTheme ? '#fff' : '#333'};
  text-transform: uppercase;
  transition: .2s ease;
  width: 37%;

  &:focus {
    outline: none !important;
    border: 1px solid #485460;
    box-shadow: 0 0 10px #719ECE;
  }

  &::placeholder {
    color: ${p => p.darkTheme ? '#d1ccc0' : '#333'};
  }
`

export const TextareaContainer = styled.div`
  width: 100%;
  height: 100pt;
  display: flex;
  margin-bottom: 28pt;
`

export const Textarea = styled.textarea`
  background: #FFFFFF1A;  
  border: 1px solid ${p => p.darkTheme ? 'transparent' : '#d1ccc0'};
  padding: 20px 30px;
  font-weight: 600;
  font-family: inherit;
  width: 100% !important;
  color: ${p => p.darkTheme ? '#fff' : '#333'};
  text-transform: uppercase;
  transition: .2s ease;
  width: 40%;

  &:focus {
    outline: none !important;
    border: 1px solid #485460;
    box-shadow: 0 0 10px #719ECE;
  }

  &::placeholder {
    color: ${p => p.darkTheme ? '#d1ccc0' : '#333'};
  }
`
// Content section END-------------------------------


// Picture section START-----------------------------
export const PictureSection = styled.section`
  height: calc(100vh - 66pt);
  width: 45%;
  position: fixed;
  right: 0;
`

export const PictureWrapper = styled.div`
  height: inherit;
  width: 100%;
  position: sticky;
  background-image: url('img/slider/Toronto 04.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const SquareEffectTop = styled.div`
  position: absolute;
  top: 15%;
  right: 15%;
  height: ${p => p.hovered ? '120px': '80px'};
  width: ${p => p.hovered ? '120px': '80px'};
  border-top: 3px solid #333;
  border-right: 3px solid #333;
  transition: .5s ease;
`
// Picture section END-------------------------------