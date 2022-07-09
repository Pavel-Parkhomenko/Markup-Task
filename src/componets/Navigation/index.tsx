import React from 'react'
import { useParams } from 'react-router-dom'
import {
  LinkStyled,
  LinkContainer,
  CirclePoint,
  Container,
  AuthContainer,
  LogIn,
  Button,
} from './styled'
import {
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from '@/constants'

const navigation: string[] = ['Home', 'Services', 'Clinic', 'Doctors', 'Contact']

export function Navigation() {
  const { link } = useParams()

  return (
    <nav>
      <Container>
        {navigation.map((title) => (
          <LinkContainer key={title} active={(link === title).toString()}>
            <LinkStyled to={`${title}`}>
              { title }
            </LinkStyled>
            <CirclePoint />
          </LinkContainer>
        ))}
      </Container>

      <AuthContainer>
        <LogIn to={LOGIN_ROUTE}>
          Log In
        </LogIn>
        <Button>
          Register
        </Button>
      </AuthContainer>
    </nav>
  )
}
