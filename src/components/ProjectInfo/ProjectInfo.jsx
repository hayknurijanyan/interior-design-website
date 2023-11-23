import Paragraph from "../Paragraph/Paragraph";
import "./styles.css";

const ProjectInfo = () => {
  return (
    <div className="paragraph-container">
      <Paragraph
        className="paragraph"
        heading="Project Overview"
        date="July 22 - 2022"
        category="Interior Design - Furniture"
        body={
          <p>
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere. Online learning with us does not
            interfere with your daily life. because learning can be done anytime
            and anywhere.
          </p>
        }
      />
      <Paragraph
        className="paragraph"
        heading="Design Process"
        body={
          <p>
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere
            <br />
            <br />
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere.
          </p>
        }
      />
    </div>
  );
};

export default ProjectInfo;
