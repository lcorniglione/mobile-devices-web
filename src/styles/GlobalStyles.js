import {createGlobalStyle} from 'styled-components';
import {fontMedium} from './typography';
import {normalize} from 'polished';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    h1, h2, h3, h4, h5, h6 , p {
        margin: 0;
    }
    body {
        margin: 0;
        font-family: ${fontMedium};
    }
    main {
        width: 90%;
        maring: 0 auto;
    }
`;
