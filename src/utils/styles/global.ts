import {createGlobalStyle} from 'styled-components';

// @ts-ignore
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    &:after {
      box-sizing: border-box;
    }

    &:before {
      box-sizing: border-box;
    }

    .grecaptcha-badge {
      z-index: 1000;
      @media (max-width: 833px) and (min-width: 0px) {
        margin-bottom: 7.8rem;
      }
    }
  }

  body, html {

    margin: 0;
    padding: 0;
    --width-device: 1700px;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.body};
    font-family: "Inter", sans-serif;
    color: var(--moon-B);
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    color: var(--moon-L2)
  }

  h2 {
    font-size: 48px;
    line-height: 1.08349;
    font-weight: 600;
    letter-spacing: -.003em;
    color: var(--moon-L6);
  }

  a {
    text-decoration: none;
    transition: all .3s;
  }


  a, .link {
    color: #2997ff;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    transition: all .3s;
  }

  button:hover {
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  input:focus,
  input:active,
  button:active,
  button:focus {
    outline: none;
  }

  @media screen and (max-width: 1024px) {
    body {
      --width-device: 1024px;
    }
  }

  @media screen and (max-width: 833px) {
    body {
      --width-device: 833px;
    }

  }


  :root {
    /* Color */

    --moon-B: #0B0D0F;
    --moon-W: #FFFFFF;
    /*New Colors*/
    --new-moon-D3: #262628;
    --new-moon-D2: #444446;
    --new-moon-D1: #58585a;
    --new-moon: #121212;
    --new-moon-L3: #808082;
    --new-moon-L2: #949496;
    --new-moon-L1: #b4b4b6;
    --new-moon-S3: #d0d0d2;
    --new-moon-S2: #e4e4e6;
    --new-moon-S1: #f2f2fa;

    --new-sky-D3: #034299;
    --new-sky-D2: #044cb3;
    --new-sky-D1: #0555c8;
    --new-sky: #0555c8;
    --new-sky-L3: #2d79e3;
    --new-sky-L2: #5195f5;
    --new-sky-L1: #66a6ff;
    --new-sky-S3: #82b6ff;
    --new-sky-S2: #abceff;
    --new-sky-S1: #d4e6ff;

    --new-space-D3: #663989;
    --new-space-D2: #75419c;
    --new-space-D1: #844ab0;
    --new-space: #8c54b8;
    --new-space-L3: #975fc2;
    --new-space-L2: #a36ecc;
    --new-space-L1: #66a6ff;
    --new-space-S3: #c699e8;
    --new-space-S2: #D4ACF2;
    --new-space-S1: #e3bfff;

    --new-love-D3: #a5071f;
    --new-love-D2: #bd0823;
    --new-love-D1: #d40927;
    --new-love: #e60a2d;
    --new-love-L3: #eb1e44;
    --new-love-L2: #f22c50;
    --new-love-L1: #fa4869;
    --new-love-S3: #fc607d;
    --new-love-S2: #fc6d87;
    --new-love-S1: #ff7a93;

    --new-earth-D3: #03823c;
    --new-earth-D2: #039645;
    --new-earth-D1: #03a84e;
    --new-earth: #05b353;
    --new-earth-L3: #16c766;
    --new-earth-L2: #24d172;
    --new-earth-L1: #35db80;
    --new-earth-S3: #51e895;
    --new-earth-S2: #6bf2a8;
    --new-earth-S1: #7afab4;

    --new-sun-D3: #eec705;
    --new-sun-D2: #fad20a;
    --new-sun-D1: #fada3c;
    --new-sun: #fbde4c;
    --new-sun-L3: #fce158;
    --new-sun-L2: #fce46b;
    --new-sun-L1: #fce883;
    --new-sun-S3: #51e895;
    --new-sun-S2: #fceb95;
    --new-sun-S1: #fdf5cc;

    /*Utils*/
    --border-radius: 10px;
    --input-border-radius: 5px;
    --placeholder-input: 15px;
    /*Dropdown*/
    --dropdownArrowSize: 0.65em;
    --input-font-size: 0.8rem;

    /*Card*/
    --card-radius: 10px;
    --card-gap: 24px;
    --card-shadow: drop-shadow(0px 4px 4px rgba(199, 199, 199, 0.25));

    /*Containers*/
    --container-width: 1420px;
    --container-width-1000: 1000px;
    --card-container-width: 1200px;

    /*Intl Helpers*/
    white-space: pre-line;

    /* Navigation */
    --bg-navbar: var(--moon-D6);
    --p-navbar: 18px 0;

    /* Footer */
    --pt-footer: 40px;
    --pb-footer: 58px;

    /*grid*/
    --grid-gutter: 32px;
    --tile-padding: 32px;
    --tile-header-padding: 40px;
    --tile-border-radius: 30px;


    /*subNavigation*/
    --snav-height: 52px;


    @media (max-width: 833px) {
      /*grid*/
      --grid-gutter: 4px;
      --tile-padding: 1rem;
    }

    /* New Concept */
    /* Globals */
    --paragraph-color: ${({theme}) => theme.fontColor};
  }

  /*Tzpographz styles */
  p {
    color: var(--moon-W)

  }


`;

export default GlobalStyle;
