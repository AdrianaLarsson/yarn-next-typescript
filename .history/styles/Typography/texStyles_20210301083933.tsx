import styled,{ css} from 'styled-components'

const baseStyle = css`
  font-family: sj_sans, Helvetica, Arial, sans-serif; 
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  text-align: left;
  opacity: ${props => (1)};
`;

 export const B4 = styled`
  ${baseStyle}
  color: black;
  font-size: 18px;
`;
export const H2 = styled.span`
  color: black;
  margin-top: 10px;
  font-size: 17px;
`;