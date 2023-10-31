
import Link from "next/link"
import './Hero.css';
import img from "next/image";

const Hero = () => {
  return (
    <>
    <div className="header-content">
      <div className="digital-product">
        <span>DIGITAL</span>
        <span className="product"> PRODUCT</span>
      </div>
      <b className="development-agency">DEVELOPMENT AGENCY</b>
      <div className="global-development-company">
        Global development company that redefines brands, enhances business
        growth and empowers global enterprises
      </div>
      <div className="schedule-reframe">
        <div className="schedule-a-call">

          <div className="schedule-a-call1">Schedule A Call</div>
        </div>
      </div>
    </div>

<div className="rectangle-parent">
<div className="frame-child"></div>
<img className="noormahal-icon" alt="" src="./noormahal@2x.png" />

<img className="antooba-icon" alt="" src="./antooba@2x.png" />

<img
  className="nearest-laundry-icon"
  alt=""
  src="./nearest-laundry@2x.png"
/>

<img className="dolil-icon" alt="" src="./dolil@2x.png" />

<img
  className="colonel-saab-icon"
  alt=""
  src="./colonel-saab@2x.png"
/>

<img className="neemsah-icon" alt="" src="./neemsah@2x.png" />
</div>
</>
  );
}

export default Hero;