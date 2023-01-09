import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import placeholderIMG from '../../assets/placeholderIMG.jpg'
import { useAuth } from '../../hooks/auth'

import {api} from '../../services/api'


interface headerProps {
    handleOpenModal: () => void;
}



export function Header({handleOpenModal}: headerProps){


    const { signOut, user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderIMG

    return(
        <Container>
            
            <Profile to='/profile'>
                <img src={avatarURL} alt={user.name} />
                
                {/*<img src="https://github.com/eduardanunes.png" alt="foto do usuario" /> */}

                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleOpenModal}>
                <RiShutDownLine/>
            </Logout>

        

        </Container>
    )
}