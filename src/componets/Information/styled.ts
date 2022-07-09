import styled from 'styled-components'

const CONTAINER_MAX_WIDTH = '558px'
const CONTAINER_WIDTH = '360px'
const INFORMATION_MAX_WIDTH = '143px'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${CONTAINER_MAX_WIDTH};
  margin-top: ${props => props.theme.spaces[7] - 9}px;
  
  @media(max-width: 414px) {
    width: ${CONTAINER_WIDTH};
  }
`

export const InformationStyled = styled.div`
  max-width: ${INFORMATION_MAX_WIDTH};

  &:nth-child(2) div {
    color: ${({ theme }) => theme.textColor.primary};
  }
`

export const Text = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${props => props.theme.spaces[3]}px;
  line-height: ${props => props.theme.spaces[4]}px;
  color: ${({ theme }) => theme.textColor.dark};
`

export const Number = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
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
