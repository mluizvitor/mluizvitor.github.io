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
    font-size: calc(16px + 0.15vw);
    line-height: 155%;
    letter-spacing: calc((16px + 0.1vw) * 0.020);
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

  h1 {
    font-size: calc(16px * 4 + 0.1vw);
    line-height: 80%;
    margin: 16px 0;
    letter-spacing: calc(68px * -0.02);
    font-weight: 600;
    position: relative;

    text-shadow: 0 4px 24px ${theme.t001.a};
  }

  h2 {
    /* font-weight: 600; */
    font-size: calc(16px * 2.5 + 0.1vw);
    line-height: 100%;
    letter-spacing: calc((16px * 2.5 + 0.1vw) * -0.02);
    font-weight: 600;
  }

  h3,
  .section {
    font-size: calc(16px + 0.1vw);
    line-height: 115%;
    letter-spacing: calc((16px + 0.1vw) * 0.15);
    text-transform: uppercase;
    font-weight: 400;
  }

  h4 {
    line-height: 120%;
    font-size: calc(16px * 1.5 + 0.1vw);
    letter-spacing: calc((16px * 1.5 + 0.1vw) * 0.02);
    font-weight: 800;
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

  .abstract {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;

    & > p {
      grid-column: 1 / 3;
      margin-bottom: calc(22px + 0.1vw);
      @media (max-width: 650px) {
        grid-column: 1 / 4;
      }
    }
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
