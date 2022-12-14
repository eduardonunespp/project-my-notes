
import { Container } from "./styles";
import { TitleInterface } from "../../global";




interface buttonText {
    title: string;
    isActive?: boolean;
}




export function ButtonText({title, isActive = false, ...rest}: buttonText){
    return(
        <Container
        type='button'
        isActive = {isActive}
        {...rest}
        >

            {title}

        </Container>
    )
}
