import styled from 'styled-components'

interface isNew {
    isNew: boolean;
}

export const Container = styled.div<isNew> `
    display: flex;
    align-items: center;
    box-sizing: border-box;

    background-color: ${({theme, isNew }) => isNew ? "transparent" : theme.colors.BACKGROUND_900 };
    color: ${({theme}) => theme.colors.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.colors.GRAY_300}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({theme}) => theme.colors.RED}
    } 

    .button-add {
        color: ${({theme}) => theme.colors.ORANGE}
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({theme}) => theme.colors.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.colors.GRAY_300}
        }
    }
`