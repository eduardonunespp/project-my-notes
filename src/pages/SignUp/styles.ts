import styled from "styled-components";
import backgroundSignIn from '../../assets/backphoto.avif'



export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: stretch;

    background-color: ${({theme}) => theme.colors.BACKGROUND_800};


`

export const Form = styled.form `
    padding: 0 136px;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;

    text-align: center;


    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.colors.ORANGE}
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0px;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.colors.GRAY_100}
    }

    > a {
        margin-top: 124px;
        color: ${({theme}) => theme.colors.ORANGE}
    }

    


`

export const Background = styled.div `
    flex: 1;
    background-image: url(${backgroundSignIn});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.6;
    

    width: 100%;
    height:100% ;

`

