import { Container, Content } from './style'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Links } from './style'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'




export function Details() {
  return(
    <Container>

      <Header />

      <main>
        <Content>

          

          <ButtonText title='Excluir Nota' />

        

          <h1> Introdução ao React </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui debitis distinctio aliquam dolore at nam reiciendis ab fugit molestiae quo in, animi exercitationem sapiente. Inventore quas recusandae amet tenetur? 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil aut laboriosam inventore eos animi deleniti ullam alias sint minima eligendi voluptate provident quo laborum, sed numquam corrupti quos expedita!</p>

          <Section title="Links úteis">
            <Links>
                <li> <a href="#">https://www.rocketseat.com.br</a></li>
                <li> <a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title='express'></Tag>
            <Tag title='nodejs'></Tag>
          </Section>

          <Button title='Voltar'/>

        </Content>
      </main>


    </Container>
  )
} 

