import * as s from './Home.style'

const Home = () => {

  return (
    <s.Home>
      <s.ParallaxWrapper>
        Parallax        
      </s.ParallaxWrapper>


      <s.AboutWrapper>
        <s.Headshot src={'img/headshot.png'}/>
        <s.AboutHeader>ABOUT</s.AboutHeader>        
        <s.AboutDescription>
					Marc is a professional designer, architecture student, and photographer in the Philadelphia area. He started
					teaching himself photography when he began architecture school, utilizing what he learned in classes to
					differentiate his photos. Chris often imagines what could be, rather than what is. This is reflected in his
					surreal and fantastical representation of the city he fell in love with, Philadelphia.
				</s.AboutDescription>
        </s.AboutWrapper>
    </s.Home>
  );
}

export default Home