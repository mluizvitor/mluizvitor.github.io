import { createGlobalStyle } from 'styled-components';
import { theme } from '../styles/colors';

export default createGlobalStyle`

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

  .grid {
    display: grid;
    gap: 32px;
  }
`;
