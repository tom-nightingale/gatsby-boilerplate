import React from "react";
import TemplateWrapper from "./src/components/TemplateWrapper";

import "./src/styles/global.css"

export const wrapPageElement = ({ element, props }) => {
  return <TemplateWrapper {...props}>{element}</TemplateWrapper>;
};
