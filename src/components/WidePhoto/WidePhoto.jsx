import "./styles.css";
import mainImg from "/assets/imgs/main.webp";

const WidePhoto = () => {
  return (
    <section className="wide-photo-container">
      <img className="wide-photo" src={mainImg} alt="Interior Design" />
    </section>
  );
};

export default WidePhoto;
