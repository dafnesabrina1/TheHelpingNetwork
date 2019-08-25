import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        box-sizing: border-box;

        color: var(--color-textColor);

        /* CSS Variables */
        --color-hover: ${props => props.theme.colors.hoverColor};
        --color-white: ${props => props.theme.colors.whiteColor};
        --color-dark: ${props => props.theme.colors.darkColor};
        --color-dark-light: ${props => props.theme.colors.lightDarkColor};
        --color-gray: ${props => props.theme.colors.grayColor};
        --color-gray-light: ${props => props.theme.colors.lightGrayColor};
        --color-gray-lightest: ${props => props.theme.colors.lightestGrayColor};
        --color-text: ${props => props.theme.colors.textColor};
        --color-shadow: ${props => props.theme.colors.shadow};
    
    }

    body {
        font-family: "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.6;
    }

    a, 
    input, 
    textarea,
    button {
        outline: none;
        text-decoration: none;
        font-family: inherit;
    }
`;
