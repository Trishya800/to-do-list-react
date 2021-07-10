import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: 0px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;
    padding: 10px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.alto};

    ${({ hidden }) => hidden && css`
      display: none;
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mineShaft};
     transition: color 0.5s;

    &:hover  {
        color: ${({ theme }) => theme.colors.teal};
      }

    &:active {
        filter: brightness(130%);
      }
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
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-family: "Material Icons Outlined";
    font-size: 16px;
    padding: 0;
    transition: 0.5s filter;

      ${({ toggleDone }) => toggleDone && css`
          background-color: ${({ theme }) => theme.colors.japaneseLaurel};
      `}

        &:hover  {
          filter: brightness(110%);
        }

        &:active {
          filter: brightness(130%);
        }

      ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.colors.crimson};

        &:hover {
          filter: brightness(110%);
        }

        &:active {
          filter: brightness(130%);
        }
      `}
`;