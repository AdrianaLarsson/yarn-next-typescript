import { Form } from 'react-bootstrap';
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

 export const B4 = styled.h3`
  margin: 5px;
  color: ${colors.black}
  font-size: 25px;
  font-weight: bold;
`;
export const H2 = styled.span`
  color: blac
  margin-top: 10px;
  font-size: 16px;
`;