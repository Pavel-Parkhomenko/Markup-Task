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
  },
  {
    number: '1.456',
    text: 'Medical Tests Done For Our Patients',
  },
  {
    number: '1M+',
    text: 'Years of Experience The Medical Field',
  },
]

export const Information = () => {
  return (
    <InformationContainerStyled>
      {information.map((info, index) => (
        <InformationStyled key={index}>
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
