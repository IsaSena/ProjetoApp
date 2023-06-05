import React from 'react';

import { 
    Container,
    Header,
    TextHeader,
    Text,
    EventWrapper,
    Img,
    EventContentWrapper,
    EventName,
    DHWrapper,
    EventDate,
    EventStartHour,
    EventDetails
} from './styles';
import { Input } from '../../components/Input';

export function Dashboard(){
    return (
        <Container>
            <Header>
                <TextHeader>Eventos de caridade</TextHeader>
            </Header>

            <Input 
            placeholder='procurar um input de pesquisa'
            />

            <EventWrapper>
                <Img>
                    <Text>Imagem</Text>
                </Img>

                <EventContentWrapper>
                    <EventName>
                        <Text>Doação</Text>
                    </EventName>
                    <DHWrapper>
                        <EventDate> 
                            <Text>06/06/2023</Text>
                        </EventDate>
                        <EventStartHour>
                            <Text>08:00</Text>
                        </EventStartHour>
                    </DHWrapper>
                    <EventDetails>
                        <Text>Evento de doação de roupas para pessoas necessitadas.</Text>
                    </EventDetails>
                </EventContentWrapper>
            </EventWrapper>
        </Container>
    );
}