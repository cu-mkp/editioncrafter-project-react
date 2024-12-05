import React from "react";
import EditionCrafter from "@cu-mkp/editioncrafter";
import config from "../data/config.json";

const App = () => {
  return <EditionCrafter {...config} />;
};

export default App;
