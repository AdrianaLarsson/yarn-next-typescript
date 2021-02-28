import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body,
    container {
      min-height: 100vh;
      padding: 0 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    },
    
    html {
        padding: 0;
        margin: 0;
        font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            "sans-serif";
        height: 1px;
        margin: auto;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`;


