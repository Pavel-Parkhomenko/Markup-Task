import React from 'react'
import {
  Container,
  PostMessage,
  Title,
  Message,
} from './styled'
import { MainEmailInput } from '../MainEmailInput'
import { Information } from '../Information'
import { mainInfo } from '@/mocks'

export function Main() {
  return (
    <Container>
      <Title>
        {mainInfo.title}
      </Title>
      <PostMessage>
        {mainInfo.postMessage}
      </PostMessage>
      <Message>
        {mainInfo.message}
      </Message>
      <MainEmailInput />
      <Information />
    </Container>
  )
}
