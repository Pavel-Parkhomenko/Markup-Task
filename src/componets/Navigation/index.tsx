import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  LinkStyled,
  LinkContainerStyled,
  CircleLinkPointStyled,
  NavContainerStyled,
  AuthContainer,
  LogInStyled,
  RegisterButtonStyled,
} from './style'
import {
  CLINIC_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  DOCTORS_ROUTE,
  SERVICES_ROUTE,
} from '@/constants'

export function Navigation() {

  const { pathname } = useLocation()

  return (
    <nav>
      <NavContainerStyled>
        <LinkContainerStyled active={(pathname === HOME_ROUTE).toString()}>
          <LinkStyled to={HOME_ROUTE}>
            Home
          </LinkStyled>
          <CircleLinkPointStyled />
        </LinkContainerStyled>
        <LinkContainerStyled active={(pathname === SERVICES_ROUTE).toString()}>
          <LinkStyled to={SERVICES_ROUTE}>
            Services
          </LinkStyled>
          <CircleLinkPointStyled />
        </LinkContainerStyled>
        <LinkContainerStyled active={(pathname === CLINIC_ROUTE).toString()}>
          <LinkStyled to={CLINIC_ROUTE}>
            Clinic
          </LinkStyled>
          <CircleLinkPointStyled />
        </LinkContainerStyled>
        <LinkContainerStyled active={(pathname === DOCTORS_ROUTE).toString()}>
          <LinkStyled to={DOCTORS_ROUTE}>
            Doctors
          </LinkStyled>
          <CircleLinkPointStyled />
        </LinkContainerStyled>
        <LinkContainerStyled active={(pathname === CONTACT_ROUTE).toString()}>
          <LinkStyled to={CONTACT_ROUTE}>
            Contact
          </LinkStyled>
          <CircleLinkPointStyled />
        </LinkContainerStyled>
      </NavContainerStyled>
      <AuthContainer>
        <LogInStyled>Log In</LogInStyled>
        <RegisterButtonStyled>Registr</RegisterButtonStyled>
      </AuthContainer>
    </nav>
  )
}
