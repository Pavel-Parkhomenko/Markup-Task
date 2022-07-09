import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/componets/Button'
import { VariantButton } from '@/interfaces'
import { navigation } from '@/mocks'
import {
  LinkStyled,
  LinkContainer,
  CirclePoint,
  Container,
  AuthContainer,
  LogIn,
} from './styled'
import {
  LOGIN_ROUTE,
  REGISTER_ROUTE
} from '@/constants'

export function Navigation() {
  const { link } = useParams()
  const navigate = useNavigate()

  const registerHandler = () => {
    navigate(REGISTER_ROUTE, { replace: true })
  }

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
        <Button onClick={registerHandler} variant={VariantButton.register} title={'Register'} />
      </AuthContainer>
    </nav>
  )
}
