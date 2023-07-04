import styled from "styled-components";


interface colorIconProps {
    colorIcon: string;
}


export const Linkk = styled.div `
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;

    background-color: blueviolet;


    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        
    }
`

export const Icon = styled.div<colorIconProps> `

        width: 30px;
        height: 30px;
        border-radius: 5px;
        background-color: ${(props) => props.colorIcon};
        display: block;

`
