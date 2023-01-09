import { Header } from '../../components/Header'
import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { PopUp } from '../../components/popUp'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'


import { api } from '../../services/api'

export function New(){
    const [links, setLink] = useState([])
    const [newLink, setNewLink] = useState()

    const [tags, setTag] = useState([])
    const [newTag, setNewTag] = useState()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [isActive, setIsActive] = useState(false)

    function handleOpenModal(){
        setIsActive(prev => !prev)
    }

    const navigate = useNavigate()

    async function handleNewNote(){

        if(!title){
            return alert('Por favor, insira um título a nota')
        }

        if(newLink){
            return alert('Por favor, insira o(s) links cadastrados')
        }

        if(newTag){
            return alert('Por favor, insira a(s) tags cadastrados')
        }

        api.post("/notes", {
            title,
            description,
            tags,
            links,
        })

        alert("Nota criada com sucesso")
        navigate(-1)
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

    function handleBack(){
        navigate(-1)
      }


    return(
        <Container>
            <Header handleOpenModal={handleOpenModal}/>

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <ButtonText title='voltar' onClick={handleBack}/>
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

            <PopUp message='Deseja mesmo sair da sua conta?' isOpen={isActive} handleClose={handleOpenModal}/>

        </Container>

        

    )
   

}