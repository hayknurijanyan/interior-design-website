import arrowButton from "./../../assets/icons/arrow-button.svg";
import facebook from "./../../assets/icons/facebook.svg";
import instagram from "./../../assets/icons/instagram.svg";
import tiktok from "./../../assets/icons/tiktok.svg";
import youtube from "./../../assets/icons/youtube.svg";
import logo from "./../../assets/icons/logo.svg";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="slogan">One of the best furniture agency.</h2>
      </div>
      <div className="right-section">
        <div className="newsletter">
          <div className="text-above-input">
            <span className="dot" />
            Enter your email to get the latest news
          </div>
          <img src={arrowButton} className="arrow-btn"></img>
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="social-icons">
          <span className="social-icons-title">Follow Us On</span>
          <div>
            <img src={facebook} className="social-icon" />
            <img src={instagram} className="social-icon" />
            <img src={tiktok} className="social-icon" />
            <img src={youtube} className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
