import React from "react";
import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const GlobalWrapper = ({ children }) => {
    return (
      <React.Fragment>
        <GlobalStyle />
        {children}
      </React.Fragment>
    )
};

export default GlobalWrapper;