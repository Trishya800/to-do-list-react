import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0 0 20px;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;
    margin: 0 20px;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};

    ${({ hidden }) => hidden && css`
      display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-all;

    ${({ done }) => done && css`
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

      ${({ toggleDone }) => toggleDone && css`
          background-color: ${({ theme }) => theme.colors.doneIconsColor};
      `}

        &:hover  {
          background-color: ${({ theme }) => theme.colors.doneIconsColorHover};
          transition: 1s;
        }

        &:active {
          background-color: ${({ theme }) => theme.colors.doneIconsColorActive};
          transition: 1s;
        }

      ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.colors.deleteIconsColor};

        &:hover {
          background-color: ${({ theme }) => theme.colors.deleteIconsColorHover};
        }

        &:active {
          background-color: ${({ theme }) => theme.colors.deleteIconsColorActive};
          transition: 1s;
        }
      `}
`;