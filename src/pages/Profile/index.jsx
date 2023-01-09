import { useState } from 'react'
import { Container } from "./styles";
import { Input } from '../../components/Input'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Form, Avatar } from "./styles";
import { Link } from 'react-router-dom'
import { PopUp } from '../../components/popUp'



import placeholderIMG from '../../assets/placeholderIMG.jpg'

import { useAuth } from '../../hooks/auth'

import {api} from '../../services/api'


export function Profile(){ 

    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderIMG

    const [ avatar, setAvatar] = useState(user.avatar)
    const [ avatarFile, setAvatarFile ] = useState(null)

    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }


    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

  
    return(
        <Container>

        <header>
                <Link to='/'>
                    <FiArrowLeft />
                </Link>
        </header>

            <Form>

                <Avatar>
                    <img src={avatarURL}/>
                     
                    <label htmlFor="avatar">

                    <FiCamera />
                        <input
                        id='avatar' 
                        type="file"
                        onChange={handleChangeAvatar}
                    />

                    </label>
                </Avatar>

                <Input 
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                    value={name}
                />

                <Input 
                    placeholder='E-mail'
                    type='email'
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                 />

                <Input 
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Input 
                    placeholder='Nova Senha'
                    type='password'
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

            <Button title="Salvar" onClick={handleUpdate}/>

            </Form>

            



        </Container>
    )
}