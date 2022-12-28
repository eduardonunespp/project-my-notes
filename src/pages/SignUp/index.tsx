import { Container } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'

import { Form } from './styles'
import { Background } from './styles'

import { Link } from 'react-router-dom'


export function SignUp(){
    return(
        <Container>

            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input 
                placeholder='Usuario'
                type='text'
                icon={FiUser}
                />

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

                <Button title='Cadastrar' />

                <Link to='/'>
                    Voltar para o Login
                </Link>

            </Form>


        </Container>

    )
}