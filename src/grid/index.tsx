import { Container } from "./styles";
import { Nav } from "./styles";
import { Content } from "./styles";
import { Header } from './styles'
import { Card } from "./styles";
import { ADS } from "./styles";
import { ComponentLink } from '../components/Linkk'






export function Grid(){
    return (
        <Container>
            <Header />
            <Nav>
       
                <ComponentLink link='aie' colorIcon="#5e2cb5"/>

            </Nav>

            <Content>
                <div>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                   
                </div>

            </Content>

            <ADS />
        </Container>
    )
}