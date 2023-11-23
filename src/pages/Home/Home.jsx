import ImageGrid from "../../components/ImageGrid/ImageGrid";
import Header from "../../components/Header/Header";
import WidePhoto from "../../components/WidePhoto/WidePhoto";
import { IMAGE_HIGHLIGHTS } from "../../data/imageHighlights";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import ContactBar from "../../components/ContactBar/ContactBar";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <Header title="Minimalist Room" />
      <WidePhoto />
      <ProjectInfo />
      <ImageGrid images={IMAGE_HIGHLIGHTS} />
      <ContactBar />
    </div>
  );
};

export default Home;
