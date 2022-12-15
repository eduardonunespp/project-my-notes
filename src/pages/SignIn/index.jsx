import { Container } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'

import { Form } from './styles'


export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu Login</h2>

                <Input 
                placeholder='Email'
                type='text'
                icon={ FiMail }
                />

                <Input 
                placeholder='Senha'
                type='password'
                icon={ FiLock }
                />


                <Button title='Entrar' />

                <a href="#">
                    Criar Conta

                </a>

            </Form>

          
            
            


        </Container>

    )
}