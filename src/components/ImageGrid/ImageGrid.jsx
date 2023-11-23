import PropTypes from "prop-types";

import "./styles.css";

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map(({ name, wide, src }, index) => (
        <img
          key={`${name}-${index}`}
          className={wide ? "wide-img" : "square-img"}
          src={src}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      wide: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ImageGrid;
