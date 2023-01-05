import { Header } from '../../components/Header'
import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { api } from '../../services/api'

export function New(){
    const [links, setLink] = useState([])
    const [newLink, setNewLink] = useState()

    const [tags, setTag] = useState([])
    const [newTag, setNewTag] = useState()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    async function handleNewNote(){
        api.post("/notes", {
            title,
            description,
            tags,
            links,
        })

        alert("Nota criada com sucesso")
        navigate("/")
    }

    console.log(links)

    function handleAddLink(){
        setLink(prevState => [...prevState, newLink])
        setNewLink("")

    }

    function handleAddTag(){
        setTag(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemove(deleted){
        setLink(statePreview => statePreview.filter(link => link !== deleted))
        setTag(statePreview => statePreview.filter(tag => tag !== deleted))
    }


    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to='/'>voltar</Link>
                    </header>

                    <Input 
                    placeholder='Título'
                    type='text'
                    icon={''}
                    onChange={e => setTitle(e.target.value)}
                    />

                    <TextArea 
                    placeholder='Observações'
                    onChange={e => setDescription(e.target.value)}
                    
                    />

                    <Section title='Links úteis'>


                    {
                        links.map((link, index) =>(
                            <NoteItem 
                            key={index}
                            value={link}
                            onClick={() => handleRemove(link)}
                            />    
                        ))
                       
                    }   
                                      
                       <NoteItem 
                        isNew
                        placeholder='Novo link'
                        onChange={e => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                        value={newLink}
                     
                        />     
               
                    </Section>

                    <Section title='Marcadores'>
                        <div className='tags'>

                    {
                        tags.map((tag, index) =>(
                            <NoteItem 
                            key={index}
                            value={tag}
                            onClick={() => handleRemove(tag)}
                            />    
                        ))
                       
                    }     

                        <NoteItem
                        isNew
                        placeholder='Nova tag'
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag}
                        onClick={handleAddTag}
                        />


                        </div>
                 
                    </Section>

                    <Button
                    title='Salvar'
                    onClick={handleNewNote}
                    />

                </Form>
            </main>

        </Container>

    )
   

}