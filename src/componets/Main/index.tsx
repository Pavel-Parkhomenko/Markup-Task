import React from 'react'
import {
  MainContentStyled,
  MainContainerStyled,
  MainPostMessageStyled,
  MainTitleStyled,
  MainMessageStyled,
} from './style'
import { MainEmailInput } from '../MainEmailInput'
import { Information } from '../Information'

export function Main() {
  return (
    <MainContainerStyled>
      <MainContentStyled>
        <MainTitleStyled>
          Booking of doctor’s appointment
        </MainTitleStyled>
        <MainPostMessageStyled>
          Don’t Miss Our Exclusive Patient Special
        </MainPostMessageStyled>
        <MainMessageStyled>
          We want to make sure that everyone has access to natural and effective care.
          With our special, you’ll receive a consultation and a digital posture assesment.
        </MainMessageStyled>
        <MainEmailInput />
        <Information />
      </MainContentStyled>
    </MainContainerStyled>
  )
}
