import styled from "styled-components";


export const Container = styled.div `
    height: 150px;
    width: 300px;

    border-radius: 7px;

    background-color: ${({theme}) => theme.colors.BACKGROUND_900};

    position: absolute;
    bottom: 5px;
    right: 5px;

    > p {
        color: ${({theme}) => theme.colors.GRAY_100}
    }

    > button {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 55px;
        height: 35px;
        border-radius: 3px;

        font-size: 10px;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;

    }



`