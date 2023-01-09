import { Container } from './style'
import { Modal } from './style'
import { Button } from '../Button'
import { useAuth } from '../../hooks/auth'

interface popUpProps {
    message: string;
    isOpen: boolean;
    handleClose: () => void;
}


export function PopUp({message, isOpen, handleClose}: popUpProps){

    const { signOut } = useAuth()

    return(
        
        <Container className={`${isOpen ? 'active' : ''}`}>
            <Modal>

            <h2>{message}</h2>

            <Button
                className='confirm'
                title={'confirmar'}
                loading = {false}
                onClick={ signOut }
             />

            <Button 
                className='cancel'
                title={'cancelar'}
                onClick={handleClose}
            />

            </Modal>
        </Container>
        
    )
}

