import React from "react";

import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    Text,
    TextHeader,
    HourWrapper,
    ButtonWrapper
} from './styles';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Register(){
    const navigation = useNavigation<any>();

    function handleSave(){
        navigation.navigate('Eventos')
    };

    return (
        <Container>
            <Header>
                <TextHeader>Cadastrar / Alterar Evento</TextHeader>
            </Header>

            <Text>Evento</Text>
            <Input />

            <Text>Data</Text>
            <Input />

            <HourWrapper>
                <Text>Hora de início</Text>
                <Input style={{width: '40%'}}/>

                <Text>Hora de finalização</Text>
                <Input style={{width: '40%'}}/>
            </HourWrapper>

            <Text>Descrição</Text>
            <Input style={{height: '15%'}}/>
            <Text>Imagem de divulgação</Text>

            <ButtonWrapper>
                <Button 
                title='SALVAR'
                type='salvarConfirmar'
                onPress={handleSave}
                />
            </ButtonWrapper>
        </Container>
    );
}