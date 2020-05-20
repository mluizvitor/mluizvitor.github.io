import React from 'react';
import {ContainerEnhanced} from '../components/Container';
import { TextInput, TextAreaInput, Form } from '../components/TextInput';
import contactBg from '../assets/backgroundContacts.svg';
import Button from '../components/Button';

export default function Contact({id}){
  return (
    <ContainerEnhanced id={id} type="container" backgroundImage={contactBg} >
      <h2>Contato</h2>
      <Form>
        <TextInput id="name" label="Nome" placeholder="João da Silva" required/>
        <TextInput id="email" label="Email" placeholder="joao@mail.com" required/>
        <TextAreaInput id="message" label="Mensagem" placeholder="Olá, Vitor..." required/>
        <div
          class="g-recaptcha"
          data-sitekey="6LcKxtEUAAAAADJpiahRzDjvgNGywQlrtTi-6gj5"
        ></div>
        <Button title="Enviar"/>
      </Form>
    </ContainerEnhanced>
  )
}