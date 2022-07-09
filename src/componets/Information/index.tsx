import React from 'react'
import { information } from '@/mocks'
import {
  Container,
  Number,
  InformationStyled,
  Text,
} from './styled'

export function Information() {
  return (
    <Container>
      {information.map((info) => (
        <InformationStyled key={info.id}>
          <Number>
            {info.number}
          </Number>
          <Text>
            {info.text}
          </Text>
        </InformationStyled>
      ))}
    </Container>
  )
}
