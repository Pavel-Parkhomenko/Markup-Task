import React, { ChangeEvent, useState } from 'react'
import { emailPlaceholder } from '@/mocks'
import { Button } from '@/componets/Button'
import { VariantButton } from '@/interfaces'
import {
  Container,
  InputEmail,
} from './styled'

export function MainEmailInput() {
  const [emailText, setEmailText] = useState('')

  return (
    <Container>
      <InputEmail
        placeholder={emailPlaceholder}
        value={emailText}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setEmailText(event.target.value)}
      />
      <Button onClick={() => setEmailText('')} variant={VariantButton.email} title={'Get Started'} />
    </Container>
  )
}
