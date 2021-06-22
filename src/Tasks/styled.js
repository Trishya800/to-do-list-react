import styled, {css} from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;
    margin: 0 20px;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({hidden}) => hidden && css`
      display: none;
    `}
`;


export const Content = styled.span`
    word-break: break-all;

    ${({done}) => done && css`
      text-decoration-line: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    color: white;
    border: none;
    font-family: "Material Icons Outlined";
    font-size: 16px;
    padding: 0;

      ${({toggleDone}) => toggleDone && css`
        background-color: green;
      `}

        &:hover  {
          background-color: hsl(120, 100%, 35%);
          transition: 1s;
        }

        &:active {
          background-color: hsl(120, 100%, 45%);
          transition: 1s;
        }

      ${({remove}) => remove && css`
        background-color: crimson;

        &:hover {
          background-color: hsl(348, 83%, 57%);
        }

        &:active {
          background-color: hsl(348, 83%, 67%);
          transition: 1s;
        }
      `}
`;