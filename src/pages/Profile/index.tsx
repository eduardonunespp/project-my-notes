import { Container } from "./styles";

import { Input } from '../../components/Input'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Form, Avatar } from "./styles";


export function Profile(){
    return(
        <Container>

            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/eduardonunespp.png"
                     alt="Foto de Usuário" />

                     
                    <label htmlFor="avatar">

                    <FiCamera />

                    <input
                    id='avatar' 
                    type="file"
                    />

                     
                    </label>
                </Avatar>

                <Input 
                placeholder='Nome'
                type='text'
                icon={FiUser}
                />

            <Input 
                placeholder='E-mail'
                type='email'
                icon={FiMail}
                />

            <Input 
                placeholder='Senha atual'
                type='password'
                icon={FiLock}
                />

            <Input 
                placeholder='Nova Senha'
                type='password'
                icon={FiLock}
                />

            <Button title="Salvar"/>

            </Form>

        </Container>
    )
}