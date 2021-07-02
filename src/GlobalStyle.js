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
      background-color: ${({ theme }) => theme.colors.concerte};
      font-family: "Montserrat", sans-serif;
      font-size: smaller;
    }
`;
