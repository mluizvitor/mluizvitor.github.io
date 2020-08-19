import { createGlobalStyle } from 'styled-components';
import bgImg from '../assets/backgroundImage.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  html,
  body {
    color: #FFF;
    background-color: #212121;
  }

  body {
    background-image: url(${bgImg});
    background-repeat: repeat-y;
    background-size: 100%
  }

  ::-moz-focus-outer,
  ::-moz-focus-inner {
    outline: 0;
    border: 0;
  }

  body {
    font-size: calc(14px + 0.1vw);
    line-height: 145%;
    letter-spacing: calc((14px + 0.1vw) * 0.015);
    font-weight: 400,
  }

  a,
  a:visited {
    color: #FFF;
  }

  h1 {
    font-size: calc(14px * 4 + 0.1vw);
    line-height: 72%;
    margin: 4px 0;
    letter-spacing: calc(68px * -0.02);
    font-weight: 600;
  }

  h2 {
    /* font-weight: 600; */
    font-size: calc(14px * 2.5 + 0.1vw);
    line-height: 100%;
    letter-spacing: calc((14px * 2.5 + 0.1vw) * -0.02);
    font-weight: 600;
  }

  h3,
  .section {
    font-size: calc(14px + 0.1vw);
    line-height: 115%;
    letter-spacing: calc((14px + 0.1vw) * 0.15);
    text-transform: uppercase;
    font-weight: 400;
  }

  h4 {
    line-height: 110%;
    font-size: calc(14px * 1.5 + 0.1vw);
    letter-spacing: calc((14px * 1.5 + 0.1vw) * 0.02);
    font-weight: 800;
  }

  caption {
    font-size: calc(12px + 0.1vw);
    line-height: calc(14px + 0.1vw);
    letter-spacing: calc((12px + 0.1vw) * 0.02);
  }

  .subtitle {
    font-size: calc(14px + 0.1vw);
    letter-spacing: calc((14px + 0.1vw) * -0.02);
    line-height: 125%;
    font-weight: 400;
  }

  .activeBtn {
    background-color: #CC3D94;
  }

  .profilePhoto {
    width: 128px;
    height: 128px;
    margin-bottom: 24px;
  }

  ul.links {
    flex-wrap: wrap;
    list-style: none;
    margin: 16px 0;
  }
  ul.links li {
    margin: 0 16px 16px 0;
    display: inline;
  }

  hr {
    width: 100%;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 16px;
  }
`;
