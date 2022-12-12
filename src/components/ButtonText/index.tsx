import { rest } from "lodash";
import { Container } from "./styles";
import { TitleInterface } from "../../global";



export function ButtonText({title, ...rest}: TitleInterface){
    return(
        <Container
        type='button'
        {...rest}
        >

            {title}

        </Container>
    )
}
