
import { Container } from './styles'



interface textArea {
    value?: any;
    placeholder: string;
    
    
}


export function TextArea({value, ...rest}: textArea){
    return(
        <Container {...rest}>
            { value }
        </Container>
    )
}