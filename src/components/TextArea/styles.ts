import styled from 'styled-components'




export const Container =  styled.textarea `
    width: 100%;
    height: 150px;

    background-color: ${({theme}) => theme.colors.BACKGROUND_900};
    color: ${({theme}) => theme.colors.WHITE};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder {
        color: ${({theme}) => theme.colors.GRAY_300}
    }
    
`