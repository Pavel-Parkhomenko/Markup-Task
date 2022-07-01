import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 3px;
`

export const CircleLinkPointStyled = styled.div<{active: string}>`
  border-radius: 50%;
  background-color: blue;
  width: 8px;
  height: 8px;
  opacity: ${props => props.active === 'true' ? 1 : 0};
`

export const LinkStyled = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  position: relative;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
  
  &:hover {
    color: #215EE9;
  }
`
