import styled from 'styled-components'

export const InformationContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 568px;
`

export const InformationStyled = styled.div`
  max-width: 143px;

  &:nth-child(2) div {
    color: ${({ theme } ) => theme.textColor.primary};
  }
`

export const InformationTextStyled = styled.span`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme } ) => theme.textColor.dark};
`

export const InformationNumberStyled = styled.div`
  font-weight: bold;
  font-size: 56px;
  line-height: 66px;
  letter-spacing: -4px;
  color: ${({ theme } ) => theme.textColor.lightDark};
  margin-bottom: 13px;

  @media(max-width: 414px){
    font-size: 36px;
    line-height: 46px;
  }
`
