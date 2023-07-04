import styled from "styled-components";


export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 
                    "header header header"
                    "nave content ads"
                    "nave content ads"
                    
    
    ;

    grid-template-columns: 270px 800px auto;

    grid-template-rows: 150px auto;
    
`

export const Nav = styled.nav `
    grid-area: nave;

    background-color: yellow;




`

export const Content = styled.main `
    grid-area: content;

    background-color: blue;
    position: relative;

    > div {
        box-sizing: border-box;
        width: 80%;
        background-color: green;
        height: 400px;
        margin: 0 auto;
        border-radius: 10px;
        margin-top: -80px;
        padding: 20px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 20px;
        
    }
`

export const Card = styled.div `
    
    
    background-color: #fff;
    border-radius: 10px;
`

export const Header = styled.main `
    grid-area: header;

    background-color: red;
`
export const ADS = styled.section `
    grid-area: ads;

    background-color: orange;
`

