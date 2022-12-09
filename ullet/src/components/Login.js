import React from 'react';
import Card from './Card';
import Gap from './Gap';
import Input from './forms/Input';
import Button from './forms/Button';

export default function Login() {
    return (<Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
        <h1 style={{color: 'white'}}>¡Hola de nuevo!</h1>
        <Gap>2rem</Gap>
        <Input>Usuario</Input>
        <Gap>0.5rem</Gap>
        <Input type="password">Contraseña</Input>
        <Gap>2rem</Gap>
        <Button><b></b></Button>
    </Card>)
}