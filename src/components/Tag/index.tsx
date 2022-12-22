import {Container} from './styles'
import { TitleInterface } from '../../global'

interface nametitle {
    title: string;
}


export function Tag({ title, ...rest}: nametitle){
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
}