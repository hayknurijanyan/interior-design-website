import PropTypes from "prop-types";
import "./styles.css";

const Paragraph = ({ body, heading, date, category, className }) => {
  return (
    <div className={className}>
      <h2>{heading}</h2>
      {body}
      {(date || category) && (
        <div className="paragraph-details">
          <span className="paragraph-details-date">{date}</span>
          <span className="paragraph-details-category">{category}</span>
        </div>
      )}
    </div>
  );
};

Paragraph.propTypes = {
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};

export default Paragraph;
