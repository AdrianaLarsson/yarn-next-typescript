//Components
import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/'

const StyledCard = styled(Card)`
display: flex;
width: ${px2vw(320, 320)};
min-height: ${px2vw(200, 320)};
flex-direction: column;
padding: ${px2vw(20)};
margin: ${px2vw(20)};
background-color: ${props => props.bgColor};
height: 100%;

@media (min-width: 768px) {
  width: ${(320, 768)};
  min-height: ${( 768)};
  height: 100%;
}

@media (min-width: 1024px) {
  width: ${(500)};
  min-height: ${(300)};
  height: 100%;
}

`;
export default StyledCard;
