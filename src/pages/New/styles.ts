import styled from 'styled-components'



export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;

    grid-template-rows: 105px auto;
    grid-template-areas:
    'header'
    'content'
    ;

   


    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

        button {
            margin-top: 0px;
            color: #fff;
        }

        > header {
            > button {
            display: none;
    }
        }

       
`


export const Form = styled.form `
    max-width: 560px;
    margin: 38px auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        h1 {
            color: #fff;
        }

        button {
            font-size: 20px;
            color: ${({theme}) => theme.colors.GRAY_300}
        }

    
    }
`