import React, { useState } from 'react';
import { ContainerEnhanced } from '../components/Container';
import { TextInput, TextAreaInput, Form } from '../components/TextInput';
import contactBg from '../assets/backgroundContacts.svg';
import Button from '../components/Button';
import { MdSend } from 'react-icons/md';

export default function Contact({ id }) {
  const [status, setStatus] = useState();

  function handleSubmitMessage(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  }

  return (
    <ContainerEnhanced id={id} type="container" backgroundImage={contactBg}>
      <h2>Contato</h2>
      <Form
        method="POST"
        action="https://formspree.io/mvowzvdr"
        onSubmit={handleSubmitMessage}
      >
        <TextInput
          id="name"
          label="Nome"
          placeholder="João da Silva"
          required
        />
        <TextInput
          id="email"
          label="Email"
          placeholder="joao@mail.com"
          type="email"
          required
        />
        <TextAreaInput
          id="message"
          label="Mensagem"
          placeholder="Olá, Vitor..."
          required
        />
        {status === 'ERROR' && (
          <p className="subtitle formStatus error">
            Ooops! Aconteceu algo deu errado. Tente novamente
          </p>
        )}
        {status === 'SUCCESS' && (
          <p className="subtitle formStatus success">
            Mensagem enviada. Obrigado!
          </p>
        )}
        <Button icon="add" title="Enviar" type="submit">
          Enviar
          <MdSend size={24} />
        </Button>
      </Form>
    </ContainerEnhanced>
  );
}
