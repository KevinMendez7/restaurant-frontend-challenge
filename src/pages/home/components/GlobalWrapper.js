import React from "react";
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const GlobalWrapper = ({ children }) => {
    return (
      <React.Fragment>
        <GlobalStyle theme="purple" />
        {children}
      </React.Fragment>
    )
};

export default GlobalWrapper;