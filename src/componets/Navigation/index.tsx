import React from 'react'
import {
  LinkStyled,
  LinkContainerStyled,
  CircleLinkPointStyled
} from './style'
import { useLocation } from 'react-router-dom'
import {
  CLINIC_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  DOCTORS_ROUTE,
  SERVICES_ROUTE,
} from '../../constants'

//const links: string[] = ['Home', 'Services', 'Clinic', 'Doctors', 'Contact']

export const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <nav>
      <LinkContainerStyled>
        <LinkStyled to={HOME_ROUTE}>
          Home
        </LinkStyled>
        <CircleLinkPointStyled active={(pathname === HOME_ROUTE).toString()}/>
      </LinkContainerStyled>

      <LinkContainerStyled>
        <LinkStyled to={SERVICES_ROUTE}>
          Services
        </LinkStyled>
        <CircleLinkPointStyled active={(pathname === SERVICES_ROUTE).toString()}/>
      </LinkContainerStyled>

      <LinkContainerStyled>
        <LinkStyled to={CLINIC_ROUTE}>
          Clinic
        </LinkStyled>
        <CircleLinkPointStyled active={(pathname === CLINIC_ROUTE).toString()}/>
      </LinkContainerStyled>

      <LinkContainerStyled>
        <LinkStyled to={DOCTORS_ROUTE}>
          Doctors
        </LinkStyled>
        <CircleLinkPointStyled active={(pathname === DOCTORS_ROUTE).toString()}/>
      </LinkContainerStyled>

      <LinkContainerStyled>
        <LinkStyled to={CONTACT_ROUTE}>
          Contact
        </LinkStyled>
        <CircleLinkPointStyled active={(pathname === CONTACT_ROUTE).toString()}/>
      </LinkContainerStyled>

    </nav>
  )
}