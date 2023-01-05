import { Container } from './style'
import { Button } from '../Button'



export function PopUp({title}){
    return(
        <Container>
            <Button
             title={title}
             loading = {false}
             />
        </Container>

    )
}