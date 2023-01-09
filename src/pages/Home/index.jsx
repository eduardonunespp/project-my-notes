import { Container, Brand, Menu, Search, Content, NewNote} from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note/node'
import { Tag } from '../../components/Tag'
import { PopUp } from '../../components/popUp'

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import {useState, useEffect} from 'react'








export function Home(){

    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [notes, setNotes] = useState([])

    const [isActive, setIsActive] = useState(false)

    function handleOpenModal(){
        setIsActive(prev => !prev)
    }

    const navigate = useNavigate()

    
    function handleSelected(tagName){

        if(tagName === 'all'){
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected){
          const filteredTags = tagsSelected.filter(tag => tag !== tagName)
          setTagsSelected(filteredTags)

        }
        else {
            setTagsSelected(prevSate => [...prevSate, tagName])
        }
        
    }

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get('/tags');
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [tagsSelected, search])

    useEffect(() => {
        async function removes(){
            const response = await api.delete(`notes?title=${'ee'}`)
            return response;
        }
        
        removes()
    }, [])

   
  
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header handleOpenModal={handleOpenModal}/>
        

            <Menu>

            <li>
                <ButtonText title='Todos'
                onClick={() => handleSelected("all")}
                isActive={tagsSelected.length === 0} />
            </li>

            {
                tags && tags.map(tag => (
                    <li key={String(tag.id)}>
                    <ButtonText
                        title={tag.name}
                        onClick={() => handleSelected(tag.name)}
                        isActive={tagsSelected.includes(tag.name)}
  
                    />
                    </li>
                ))
                 
            }
             
                
            </Menu>

            <Search>
                <Input 
                placeholder="Pesquisar pelo título"
                onChange={e => setSearch(e.target.value)}
                icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">

                    {
                        notes.map(note => (
                            <Note 
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }

                                                                   
                </Section>  


            </Content>

            <NewNote to='/new'>
            
                <FiPlus />
                Criar nota

            </NewNote>

            <PopUp message='Deseja mesmo sair da sua conta?' isOpen={isActive} handleClose={handleOpenModal}/>

           
        </Container>
    )
}