
import { HTMLAttributes, HTMLProps } from "react";
import { Container } from "./styles";


interface Props extends HTMLAttributes<HTMLButtonElement> {
    title: string;
    loading?: boolean;
    onClick?: any;
}

export function Button({title, onClick, loading = false, ...rest}: Props){

    return(
        <Container 
        type="button"
        disabled={loading}
        onClick={onClick}
        {...rest}
        >
             {loading ? 'Carregando...' : title }
        </Container>
    )
  
}
