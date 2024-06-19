import "./WhyChooseUs.css";
import { WhyChooseUsData } from "../../Data/WhyChooseUsData";

const WhyChooseUs = () => {
  return (
    <div className="whychooseus-container">
      {/* <hr className="hr" /> */}
      <div className="whychooseus-subcontainer">
        <div className="whychooseus-content">
          <h4 className="heading-text">WHY CHOOSE US</h4>
            <h1 className="
            h1-txt stroke-text2">WE TRANSFORM YOUR BUSINESS</h1>
            <div className="whychooseus-rsn-blocks">
                {
                  WhyChooseUsData.map((key)=>{
                    return(
                      <div className="whychooseus-rsn-block" key={key.id}>
                        <div className="rsn-block-icon">{key.icon}</div>
                        <div className="rsn-block-heading">{key.heading}</div>
                        <div className="rsn-block-text">{key.description}</div>
                      </div>
                    )
                  })
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
