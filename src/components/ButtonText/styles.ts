import styled from "styled-components";

type ButtonStyleProps = {
    isActive: boolean;
}

export const Container = styled.button<ButtonStyleProps> `
    background: none;
    color: ${({ theme, isActive }) => isActive ? theme.colors.ORANGE : theme.colors.GRAY_100};



    border: none;
    font-size: 16px;

`