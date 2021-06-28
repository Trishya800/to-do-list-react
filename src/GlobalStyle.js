import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
      box-sizing: inherit;
    }

    body {
      background-color: rgb(241 240 242);
      font-family: "Montserrat", sans-serif;
      font-size: smaller;
    }
`;
