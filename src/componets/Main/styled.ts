import styled from 'styled-components'

const POST_MESSAGE_WIDTH = '543px'
const POST_MESSAGE_MIN_WIDTH = '300px'
const MESSAGE_WIDTH = '543px'
const MESSAGE_MIN_WIDTH = '320px'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.spaces[6] + 30}px;
  margin-left: -6px;

  @media(max-width: 768px) {
    margin-top: 145vw;
    margin-left: ${props => props.theme.spaces[1]}px;
  }

  @media(max-width: 568px) {
    margin-left: ${props => props.theme.spaces[3]}px;
  }
`

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: ${props => props.theme.spaces[4]}px;
  color: ${({ theme }) => theme.textColor.primary};
  margin-top: ${props => props.theme.spaces[2] - 4}px;
  margin-bottom: ${props => props.theme.spaces[4] - 4}px;
`

export const PostMessage = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSizes[7] + 9}px;
  line-height: 101.8%;
  letter-spacing: -2.4px;
  color: ${({ theme }) => theme.textColor.primary};
  margin-bottom: ${props => props.theme.spaces[5]}px;
  width: ${POST_MESSAGE_WIDTH};
  margin-top: 0;
  
  @media(max-width: 568px) {
    line-height: ${props => props.theme.spaces[6] - 20}px;
    font-size: ${props => props.theme.fontSizes[5] + 5}px;
    width: ${POST_MESSAGE_MIN_WIDTH};
  }
`

export const Message = styled.p`
  margin: 0 0 50px 0;
  padding: 0;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.textColor.primary};
  width: ${MESSAGE_WIDTH};
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: ${props => props.theme.spaces[5]}px;
  opacity: 0.7;

  @media(max-width: 568px) {
    line-height: ${props => props.theme.spaces[4]}px;
    font-size: ${props => props.theme.fontSizes[1]}px;
    width: ${MESSAGE_MIN_WIDTH}px;
  }
`
