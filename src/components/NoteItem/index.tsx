import { FiPlus, FiX } from "react-icons/fi";

import { Container } from './styles'

interface NoteItem {
    isNew?: boolean;
    value?: any;
    onClick?: any;
    placeholder?: string;
}

export function NoteItem({isNew, value, onClick, ...rest}: NoteItem){
    return (
        <Container isNew={isNew}>

            <input type="text"
            value={value}
            readOnly={!isNew}
            {...rest} 
            />

        
            <button
            
            onClick={onClick}
            className={isNew ? 'button-add' : 'button-delete'}
            >
                  { isNew ? <FiPlus /> : <FiX />}

            </button>

        </Container>
    )
}