import "./HeroNav.modules.css";

import ironhackLogo from "../../assets/ironhack-logo-xs.png";
import menuIcon from "../../assets/menu-top-xs.png";

function HeroNav() {
  return (
    <nav className="hero--nav">
      <button>
        <img src={ironhackLogo} alt="Ironhack logo" />
      </button>
      <button>
        <img src={menuIcon} alt="Menu icon" />
      </button>
    </nav>
  );
}

export default HeroNav;
