import SharepointLogo from "../images/sharepointlogo.png";
import www from "../images/www.png";
import appIcon from "../images/mobileAppIcon.png";
import ecomLogo from "../images/ecom-logo.png"
import digTransLogo from "../images/digital-transformation.png"
import AILogo from "../images/AI-logo.png"

const iconSize = 100;

export const heroSliderData = [
  {
    logo: <img src={www} height={iconSize} alt="" />,
    heading: (
      <div className="sd-text">
        Responsive Website <br />to Scale Responsible <br />Bussiness
      </div>
    ),
  },
  {
    logo: <img src={AILogo} height={iconSize} alt="" />,
    heading: (
      <div className="sd-text">
        Artificial Intelligence <br />& Machine Learning
      </div>
    ),
  },
  {
    logo: <img src={digTransLogo} height={iconSize} alt="" />,
    heading: (
      <div className="sd-text">
        Digital Transformation <br />With a Human Touch
      </div>
    ),
  },
  {
    logo: <img src={appIcon} height={iconSize} alt="" />,
    heading: (
      <div className="sd-text">
        Enterprise <br />Mobile Solutions
      </div>
    ),
    text: "Think Big, Think Different with our Mobile Solutions",
  },
  {
    logo: <img src={ecomLogo} height={iconSize} alt="" />,
    heading: (
      <div className="sd-text">
        E-Commerce Is Way More <br />
        Than Online Shopping
      </div>
    ),
    text: "Transformation Solutions to grow your E-Commerce Business",
  },
];
