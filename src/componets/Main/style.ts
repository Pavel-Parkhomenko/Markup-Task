import styled from 'styled-components'

export const MainContainerStyled = styled.main`
  display: flex;

  @media(max-width: 768px) {
    margin-top: 960px;
  }
`
export const MainContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.spaces[6] + 30}px;
  margin-left: -6px;

  @media(max-width: 768px) {
    margin-top: ${props => props.theme.spaces[6] + 8}px;
    margin-left: ${props => props.theme.spaces[4]}px;
  }
`
export const MainTitleStyled = styled.h1`
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: ${props => props.theme.spaces[4]}px;
  color: ${({ theme }) => theme.textColor.primary};
  margin-top: ${props => props.theme.spaces[2] - 4}px;
  margin-bottom: ${props => props.theme.spaces[4] - 4}px;
`

export const MainPostMessageStyled = styled.h2`
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes[7] + 9}px;
  line-height: 101.8%;
  letter-spacing: -2.4px;
  color: ${({ theme }) => theme.textColor.primary};
  margin-bottom: ${props => props.theme.spaces[5]}px;
  width: ${props => props.theme.size.large + 43}px;
  margin-top: 0;
  
  @media(max-width: 414px) {
    line-height: ${props => props.theme.spaces[6] - 20}px;
    font-size: ${props => props.theme.fontSizes[6] + 5}px;
    width: ${props => props.theme.size.big}px;
  }
`

export const MainMessageStyled = styled.p`
  margin: 0 0 50px 0;
  padding: 0;
  font-weight: normal;
  color: ${({ theme }) => theme.textColor.primary};
  width: ${props => props.theme.size.large + 43}px;
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: ${props => props.theme.spaces[5]}px;
  opacity: 0.7;

  @media(max-width: 414px) {
    line-height: ${props => props.theme.spaces[4]}px;
    font-size: ${props => props.theme.fontSizes[1]}px;
    width: ${props => props.theme.size.large + 20}px;
  }
`
