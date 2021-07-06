import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './GlobalStyle.js';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "./Theme";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
