import { createGlobalStyle } from 'styled-components';
import { theme } from '../styles/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-feature-settings: "ss04"
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  html,
  body {
    color: ${theme.t006};
    background-color: ${theme.t001.f};
  }

  ::-moz-focus-outer,
  ::-moz-focus-inner {
    outline: 0;
    border: 0;
  }

  body {
    font-size: calc(16px + 0.125vw);
    line-height: 155%;
    letter-spacing: calc((16px + 0.125vw) * 0.020);
    font-weight: 400,
  }

  a,
  a:visited {
    color: ${theme.t006};
    background-color: transparent;
    transition: background-color 500ms;
    border-radius: 4px;
  }

  h2, h3 {
    position: relative;
    display: inline;
    z-index: 4;
  }

  h2 {
    
  }

  caption {
    font-size: calc(12px + 0.1vw);
    line-height: calc(16px + 0.1vw);
    letter-spacing: calc((12px + 0.1vw) * 0.02);
  }

  .subtitle {
    font-size: calc(16px + 0.1vw);
    letter-spacing: calc((16px + 0.1vw) * -0.02);
    line-height: 135%;
    font-weight: 400;
  }

  .activeBtn {
    background-color: ${theme.t003};
    border-radius: 4px;
  }

  .profilePhoto {
    width: calc(128px + 5vw);
    height: calc(128px + 5vw);
    margin-bottom: 24px;
    border-radius:50%;
  }

  ul.links {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 16px 0;
  }
  ul.links li {
    margin: 0 32px 16px 0;
    display: inline;
  }

  hr {
    width: 100%;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 16px;
  }


  @keyframes grayscaleAnim {
    from {
      filter: grayscale(1) opacity(20%);
    }
    to {
      filter: grayscale(0);
    }
  }
`;
