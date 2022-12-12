import { rest } from "lodash";
import { Container } from "./styles";



type btntypes = "button" | "submit" | "reset"


interface propsType {
    title: string | number;
    loading?: boolean;
}

export function Button({title, loading = false, ...rest}: propsType){

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