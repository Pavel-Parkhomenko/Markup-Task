import styled from 'styled-components';

export const InformationContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 568px;
`;

export const InformationStyled = styled.div`
  max-width: 143px;

  &:nth-child(2) div {
    color: #215EE9;;
  }
`;

export const InformationTextStyled = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  //max-width: 143px;
`;

export const InformationNumberStyled = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 66px;
  letter-spacing: -4px;
  color: #333333;
  margin-bottom: 13px;
`;
