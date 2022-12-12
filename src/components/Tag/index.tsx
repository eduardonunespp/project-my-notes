import {Container} from './styles'
import { TitleInterface } from '../../global'

interface nametitle {
    title: string;
}


export function Tag({ title }: TitleInterface){
    return(
        <Container>
            {title}
        </Container>
    )
}