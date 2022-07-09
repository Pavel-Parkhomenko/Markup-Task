import styled from 'styled-components'

const CONTAINER_MAX_WIDTH = '100%'
const INFO_1_WIDTH = '142px'
const INFO_2_WIDTH = '140px'
const INFO_3_WIDTH = '144px'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${CONTAINER_MAX_WIDTH};
  margin-top: ${props => props.theme.spaces[7] - 9}px;
  
  & > :first-child {
    width: ${INFO_1_WIDTH};
    margin-right: 5px;
  }

  & > :nth-child(2) {
    width: ${INFO_2_WIDTH};
    margin-right: 5px;
  }

  & > :last-child {
    width: ${INFO_3_WIDTH};
  }
`

export const InformationStyled = styled.div`
  &:nth-child(2) div {
    color: ${({ theme }) => theme.textColor.primary};
  }
`

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSizes[2]}px;
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

  @media(max-width: 568px){
    font-size: ${props => props.theme.fontSizes[6]}px;
    line-height: ${props => props.theme.spaces[6]}px;
  }

  @media(max-width: 414px){
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: ${props => props.theme.spaces[5] + 10}px;
  }
`
