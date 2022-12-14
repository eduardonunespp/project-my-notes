
import { Container } from './styles'
import { Tag } from '../Tag'



type typetags = {
    id: string;
    name: string;
}


 interface NoteComponents {
     data: dateNotes;
    
}

interface dateNotes extends NoteComponents {
    title: string;
     tags: typetags;
}



export function Note({data, ...rest}: NoteComponents){

    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            { 
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => {
                            <Tag key={tag.id} title={tag.name} />
                        })
                    }
                
                </footer>
            }
        </Container>
    )
}
    
    
