import { Footer } from "../../components/Footer/Index";
import { Holiday } from "../../components/Holiday/Index";
import { ImageBlock } from "../../components/ImageBlock/Index";
import { Info } from "../../components/Info/Index";
import { Reviews } from "../../components/Reviews/Index";

const Home = () => {
  return (
    <div>
      <ImageBlock />
      <Info />
      <Reviews />
      <Holiday />
      <Footer />
    </div>
  );
};

export { Home };
