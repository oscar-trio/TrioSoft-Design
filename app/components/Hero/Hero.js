
import Link from "next/link"
import './Hero.css';
import Image from "next/image";

const Hero = () => {
    return (
      <section className="hero container">
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
              <img
                className="streamlinecomputer-webcam-vid-icon"
                alt=""
                src="./public/streamlinecomputerwebcamvideoworkvideomeetingcameracompanyconferenceoffice.svg"
              />

              <div className="schedule-a-call1">Schedule A Call</div>
            </div>
          </div>
        </div>
{/*       
      <div className="header-image">
          <img className="image-1-icon" alt="" src="./public/img/image-1@2x.png" />
        </div> */}
    </section>
    );
}

export default Hero;