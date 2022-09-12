import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", "Noto Sans KR",sans-serif;
    font-size:14px;
    line-height: 1.5;
    overflow-y:hidden;
  }
`;

export default GlobalStyle;
