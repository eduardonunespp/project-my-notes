import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

   
    h1, h2 {
        color: #fff;
    }

    body{
        background-color: ${props => props.theme.colors.BACKGROUND_800};
        color: ${props => props.theme.colors.WHITE}

        -webkit-font-smoothing antialiased;

    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }
`
