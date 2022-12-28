import styled from "styled-components";

export const Container = styled.section `
    margin: 28px 0px;
    padding: 7px;


    > h2 {
        border-bottom: 1px solid ${({theme}) => theme.colors.BACKGROUND_700};

        

        padding-bottom: 16px;
        margin-bottom: 24px;

        color: ${({theme}) => theme.colors.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }

`