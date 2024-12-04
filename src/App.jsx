import React from "react";
import EditionCrafter from "@cu-mkp/editioncrafter";
import config from "../data/config.json";

const configProps = {
  ...config,
  id: "ec",
  iiifManifest: "/iiif/manifest.json",
};

const App = () => {
  return <EditionCrafter {...configProps} />;
};

export default App;
