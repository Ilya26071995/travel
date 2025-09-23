import React from "react";
import { Footer } from "../../components/Footer/Index";
import { ImageBlock } from "../../components/ImageBlock/Index";
import { FullTrip } from "../../components/FullTrip";

const BigPageTrip = () => {
  return (
    <div>
      <ImageBlock />
      <FullTrip />
      <Footer />
    </div>
  );
};

export { BigPageTrip };
