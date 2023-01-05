import { FiPlus, FiX } from "react-icons/fi";

import { Container } from './styles'

interface NoteItem {
    isNew?: boolean;
    value?: string;
    onClick?: any;
    placeholder?: string;
    onChange?: any;
}

export function NoteItem({isNew, value, onClick, onChange, ...rest}: NoteItem){
    return (
        <Container isNew={isNew}>

            <input type="text"
            value={value}
            readOnly={!isNew}
            onChange={onChange}
            {...rest} 
            />

        
            <button
            type='button'
            onClick={onClick}
            className={isNew ? 'button-add' : 'button-delete'}
            >
                  { isNew ? <FiPlus /> : <FiX />}

            </button>

        </Container>
    )
}