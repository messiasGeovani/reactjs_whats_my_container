import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    :root {
        --background: linear-gradient(180deg, #24B8EB 0%, #039BC6 32.29%, #008BB8 100%), #FFFFFF;
        --white: #FFFFFF;
        --lightwhite: #CFCFCF;
        --lightblack: #4A4A4A;
        --shadow: rgba(0, 0, 0, 0.5);
        --hover: #E2E2E2;
    }
`