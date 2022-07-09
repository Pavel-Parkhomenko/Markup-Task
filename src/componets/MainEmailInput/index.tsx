import React from 'react'
import { emailPlaceholder } from '@/mocks'
import {
  EmailButton,
  Container,
  InputEmail,
} from './styled'

export function MainEmailInput() {
  return (
    <Container>
      <InputEmail placeholder={emailPlaceholder} />
      <EmailButton>
        Get Started
      </EmailButton>
    </Container>
  )
}
