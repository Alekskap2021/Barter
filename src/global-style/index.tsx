import { createGlobalStyle } from "styled-components";
import { useMediaQuery } from "react-responsive";

export const isMobile = () => false; // useMediaQuery({ query: '(min-width: 560px)' });

export const media = {
  mobile: `@media screen and (max-width: 560px)`,
};

export const GlobalStyle = createGlobalStyle`


* {
    padding: 0;
    margin: 0;
    font-family: 'Outfit', sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
   outline: unset;
}
img {
    width: 100%;
    height: 100%;
}
h2 {
    font-weight: 700;
font-size: 28px;
line-height: 35px;
color: var(--default-black);
${media.mobile}{
    font-weight: 600;
font-size: 14px;
line-height: 18px;
}
}
input,select,textarea {
    outline: none;
    border:unset;
}
a {
    color: black;
}
button {
    outline: unset;
    border: unset;
    background: unset;
    cursor: pointer;
}
:root {
    --default-yellow: #fdce05;
    --default-black: #373538;
    --default-border-radius: 100px;
    ${media.mobile} {
        --default-border-radius: 30px;
    }
}
`;
