import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Content } from './style'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Links } from './style'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'


import { api } from '../../services/api'

import { useParams } from 'react-router-dom'

export function Details() {

  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState(null)


  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm('Tem certeza que deseja excluir essa nota?')

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
   
  }

  return(
    <Container>

      <Header />

    {

      data && 

      <main>
      <Content>

        

        <ButtonText title='Excluir Nota' onClick={handleRemove} />

      

        <h1> {data.title} </h1>

        <p>{data.description}</p>

        {
          data.links && 
           <Section title="Links úteis">
           <Links>
              
              {
                data.links.map(link => (
                  <li key={String(link.id)}> 
                    <a href={link.url} target='_blank'>
                    {link.url}
                    </a>
                    </li>
                ))
              
              }

           </Links>
         </Section>
        }
        
        {

          data.tags &&
          <Section title="Marcadores">
            {
                data.tags.map(tag => (
                  <Tag
                  key={String(tag.id)} 
                  title={tag.name}
                  />
                ))
                
            }
            
            
          </Section>
        }
       

        <Button title='Voltar' onClick={handleBack}/>

      </Content>
    </main>
    }
      
    </Container>
  )
} 

