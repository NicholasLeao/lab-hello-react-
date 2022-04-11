// CSS
import "./Hero.modules.css";
// Components
import HeroNav from "../HeroNav/HeroNav";
import HeroContent from "../HeroContent/HeroContent";

function Hero() {
  return (
    <div className="hero">
      <HeroNav />
      <HeroContent />
    </div>
  );
}

export default Hero;
