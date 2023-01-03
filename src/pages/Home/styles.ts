import styled from 'styled-components'
import { Section } from '../../components/Section';

import { Link } from 'react-router-dom'
import { divide } from 'lodash';

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content"
    ;

    background-color: ${({theme}) => theme.colors.BACKGROUND_800};
    `;

 


export const Brand = styled.div `
    grid-area: brand;
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid ${({theme}) => theme.colors.BACKGROUND_700};
    background-color: ${({theme}) => theme.colors.BACKGROUND_800};

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.colors.ORANGE}
    }
`;
export const Menu  = styled.ul `
    grid-area: menu;

    background-color: ${({theme}) => theme.colors.BACKGROUND_900};
    padding-top: 64px;

    text-align: center;

    > li {
        margin-bottom: 24px;
    }
    
`;
export const Search  = styled.div `
    grid-area: search;

    padding: 64px 64px 0;
   
`;
export const Content  = styled.div `
    grid-area: content;

    > section {
        padding: 60px;
    }
   
`;
export const NewNote = styled(Link) `
    grid-area: newnote;


    background-color: ${({ theme }) => theme.colors.ORANGE};
    border: none;
    color: ${({ theme }) => theme.colors.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;

    

    svg {
        margin-right: 8px;
        color: black;
        color: ${({ theme }) => theme.colors.BACKGROUND_900};
    }
   
`;

