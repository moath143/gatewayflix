import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'DM Sans', sans-serif;
    background-color: #1E1E1E;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}
`;
