import React from "react";
import { ImageBlock } from "../../components/ImageBlock/Index";
import { NotesBlock } from "../../components/NotesBlock/Index";
import { Footer } from "../../components/Footer/Index";

const Notes = () => {
  return (
    <div>
      <ImageBlock />
      <NotesBlock type={true} />
      <Footer />
    </div>
  );
};

export { Notes };
