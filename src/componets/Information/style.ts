import styled from 'styled-components'

export const InformationContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${props => props.theme.size.large + 58}px;
  
  @media(max-width: 414px) {
    width: ${props => props.theme.size.big + 60}px;
  }
`

export const InformationStyled = styled.div`
  max-width: ${props => props.theme.size.med - 7}px;

  &:nth-child(2) div {
    color: ${({ theme }) => theme.textColor.primary};
  }
`

export const InformationTextStyled = styled.span`
  font-weight: normal;
  font-size: ${props => props.theme.spaces[3]}px;
  line-height: ${props => props.theme.spaces[4]}px;
  color: ${({ theme }) => theme.textColor.dark};
`

export const InformationNumberStyled = styled.div`
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes[7]}px;
  line-height: ${props => props.theme.spaces[6]}px;
  letter-spacing: -4px;
  color: ${({ theme }) => theme.textColor.lightDark};
  margin-bottom: ${props => props.theme.spaces[3]}px;

  @media(max-width: 414px){
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: ${props => props.theme.spaces[5] + 10}px;
  }
`
