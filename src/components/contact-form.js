import React from 'react'
import styled from 'styled-components'

import Button from './button'
import { FaUser, FaMailBulk } from 'react-icons/fa'

const Container = styled.form`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 30px;
  margin: 15px;
  color: #FFF;
`

const Title = styled.h2`
  text-align: center;
  font-family: Rancho;
`

const Field = styled.input`
  border-radius: 5px;
  margin: 5px;
  width: 50%;
`

const MessageArea = styled.textarea`
  width: 100%;
  resize: none;
  border-radius: 5px;
  margin: 5px;
`

const SubmitButton = styled(Button)`
  margin: 5px;
  margin-bottom: 0;
  width: 100%;
`;

const ContactForm = () => (
  <Container>
    <Title>Contact Us</Title>
    <FaUser/>
    <Field type="text" placeholder="Name" name="firstname" required/>
    <br/>
    <FaMailBulk/>
    <Field type="text" placeholder="Email" name="email" required/>
    <MessageArea name="subject" placeholder="Your message goes here..." required/>
    <SubmitButton primary>Submit</SubmitButton>
  </Container>
)

export default ContactForm