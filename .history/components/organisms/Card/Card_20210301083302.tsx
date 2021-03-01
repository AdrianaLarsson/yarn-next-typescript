//Components
import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/'
import px2vw from '../../../styles/px2vw';

const StyledCard = styled(Card)`
display: flex;
width: ${px2vw(295, 320)};
min-height: ${px2vw(200, 320)};
flex-direction: column;
padding: ${px2vw(15)};
margin: ${px2vw(20)};
background-color: ${props => props.bgColor};
height: 100%;

@media (min-width: 768px) {
  width: ${px2vw(320, 768)};
  min-height: ${px2vw(200, 768)};
  height: 100%;
`;
export default StyledCard;
