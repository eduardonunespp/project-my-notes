import { useState } from 'react'

import { useAuth } from '../../hooks/auth'

import { Container } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Form } from './styles'
import { Background } from './styles'

import { Link } from 'react-router-dom'


export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const { signIn }  = useAuth()

    

    function handleSignIn(){
        signIn({email, password})
    }



    return(
        <Container>
            <Form>
                <h1>My Notes</h1>
                <p>Aplicação para salvar e gerenciar suas anotações úteis</p>

                <h2>Faça seu Login</h2>

                <Input 
                placeholder='Email'
                type='text'
                icon={ FiMail }
                onChange = {event => setEmail(event.target.value)}
                />

                <Input 
                placeholder='Senha'
                type='password'
                icon={ FiLock }
                onChange = {event => setPassword(event.target.value)}
                />


                <Button title='Entrar' onClick={handleSignIn}/>

                <Link to='/register'>
                    Criar Conta

                </Link>

            </Form>

            <Background />

          
            

        </Container>

    )
}