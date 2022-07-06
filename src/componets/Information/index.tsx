import React from 'react'
import {
  InformationContainerStyled,
  InformationNumberStyled,
  InformationStyled,
  InformationTextStyled,
} from './style'

const information = [
  {
    number: '240',
    text: 'Qualified Doctors & Medical Specialists',
    id: 1,
  },
  {
    number: '1.456',
    text: 'Medical Tests Done For Our Patients',
    id: 2,
  },
  {
    number: '1M+',
    text: 'Years of Experience The Medical Field',
    id: 3,
  },
]

export function Information() {
  return (
    <InformationContainerStyled>
      {information.map((info) => (
        <InformationStyled key={info.id}>
          <InformationNumberStyled>
            {info.number}
          </InformationNumberStyled>
          <InformationTextStyled>
            {info.text}
          </InformationTextStyled>
        </InformationStyled>
      ))}
    </InformationContainerStyled>
  )
}
