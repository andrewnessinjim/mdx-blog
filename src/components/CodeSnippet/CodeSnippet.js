import React from "react";

import theme from "./theme";
import { StWrapper } from "./CodeSnippet.styled";
import { Code } from "bright";

function CodeSnippet(props) {
  return (
    <StWrapper>
      <Code {...props} theme={theme} />
    </StWrapper>
  );
}

export default CodeSnippet;
