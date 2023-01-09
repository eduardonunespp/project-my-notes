
import { Container } from "./styles";
import { TitleInterface } from "../../global";




interface buttonText {
    title: string;
    isActive?: boolean;
    onClick?: any;
}




export function ButtonText({title, isActive = false, onClick, ...rest}: buttonText){
    return(
        <Container
        type='button'
        isActive = {isActive}
        onClick={onClick}
        {...rest}
        >

            {title}

        </Container>
    )
}
