import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkContainerStyled = styled.div<{ active: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 3px;
  margin-top: 3px;
  color: ${({ theme }) => theme.textColor.muted};

  ${props => props.active === 'true' ? css`
    & > :last-child {
      opacity: 1;
    }

    & > :first-child {
      color: ${({ theme }) => theme.textColor.primary}
    }
  ` : css`
    & > :last-child {
      opacity: 0;
    }
  `};
`

export const CircleLinkPointStyled = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgColor.primary};
  width: 8px;
  height: 8px;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  position: relative;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textColor.muted};

  &:hover {
    color: ${({ theme }) => theme.bgColor.primary};
  }
`
