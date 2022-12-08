import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

   
    
    body{
        background-color: ${props => props.theme.colors.BACKGROUND_900};
        color: ${props => props.theme.colors.WHITE}

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
