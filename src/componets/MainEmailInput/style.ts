import styled from 'styled-components'
import mail from '../../@types/svg/mail.svg'

export const InputEmailContainerStyled = styled.div`
  max-width: 515px;
  height: 68px;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor.light};
  margin-bottom: 120px;

  &::before {
    content: '';
    background: url(${mail}) no-repeat;
    width: 50px;
    height: 16px;
    margin-right: 24px;
    margin-left: 24px;
    opacity: 0.2;
  }

  @media(max-width: 414px){
    width: 330px;
  }
`

export const InputEmailStyled = styled.input.attrs({
  placeholder: 'Enter your email',
  type: 'text',
})`
  border: none;
  outline: none;
  -webkit-appearance: none;
  width: 100%;
  vertical-align: middle;

  &::placeholder {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.textColor.dark};
    opacity: 0.2;
  }
`

export const EmailButtonStyled = styled.button`
  width: 330px;
  height: 50px;
  margin-right: 11px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${({ theme }) => theme.textColor.light};
  background-color: ${({ theme }) => theme.bgColor.primary};
  border-radius: 40px;
  border: 0;
  box-shadow: 0 100px 161px rgba(33, 94, 233, 0.08),
  0 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
  0 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
  0 20px 26.1625px rgba(33, 94, 233, 0.04),
  0 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
  0 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);

  @media(max-width: 414px){
    width: 100px;
    height: 35px;
    font-weight: normal;
    font-size: 10px;
    line-height: 10px;
  }
`
