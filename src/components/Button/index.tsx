
import { HTMLAttributes, HTMLProps } from "react";
import { Container } from "./styles";


interface Props extends HTMLAttributes<HTMLButtonElement> {
    title: string;
    loading?: boolean;
}

export function Button({title, loading = false, ...rest}: Props){

    return(
        <Container 
        type="button"
        disabled={loading}
        {...rest}
        >
             {loading ? 'Carregando...' : title }
        </Container>
    )
  
}
