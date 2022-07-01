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
  margin-top: 80px;
  margin-left: -6px;

  @media(max-width: 768px) {
    margin-top: 72px;
    margin-left: 25px;
  }
`
export const MainTitleStyled = styled.h1`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.textColor.primary};
  margin-top: 20px;
  margin-bottom: 20px;
`

export const MainPostMessageStyled = styled.h2`
  font-weight: bold;
  font-size: 65px;
  line-height: 101.8%;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.textColor.primary};
  margin-bottom: 33px;
  width: 543px;
  margin-top: 0;
  
  @media(max-width: 414px) {
    line-height: 44px;
    font-size: 45px;
    width: 300px;
  }
`

export const MainMessageStyled = styled.p`
  margin: 0 0 50px 0;
  padding: 0;
  font-weight: normal;
  color: ${({ theme }) => theme.textColor.primary};
  width: 543px;
  font-size: 20px;
  line-height: 30px;
  opacity: 0.7;

  @media(max-width: 414px) {
    line-height: 25px;
    font-size: 14px;
    width: 320px;
  }
`
