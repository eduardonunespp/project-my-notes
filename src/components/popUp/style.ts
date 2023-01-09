import styled from "styled-components";



export const Container = styled.div  `
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.504);

    &.active {
        display: flex;
    }
    
`

export const Modal = styled.div `
    height: 150px;
    width: 350px;
    position: relative;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 10px;

    
    background-color: ${({theme}) => theme.colors.BACKGROUND_900};

    > h2 {
        color: ${({theme}) => theme.colors.WHITE};
        font-size: 1.0em;
        width: 250px;
        
        position: absolute;
        top: 25px;
        left: 50%;
        transform: translateX(-50%);
    }

   

    > p {
        color: ${({theme}) => theme.colors.GRAY_100}
    }

    > .confirm, .cancel {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 55px;
        height: 30px;
        padding: 10px;
        border-radius: 3px;

        font-size: 10px;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    > .cancel {
        position: absolute;
        bottom: 10px;
        right: 70px;
    }






`