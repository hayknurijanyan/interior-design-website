import PropTypes from "prop-types";
import "./styles.css";

const Header = ({ title }) => {
  return (
    <section className="main-section">
      <h1>{title}</h1>
      <p className="description">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
