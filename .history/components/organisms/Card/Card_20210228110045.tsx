//Components
import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/'

const StyledCard = styled(Card)`
display: flex;
width: ${(320, 320)};
min-height: ${(200, 320)};
flex-direction: column;
padding: ${(20)};
margin: ${(20)};
background-color: ${props => props.bgColor};
height: 100%;

@media (min-width: 768px) {
  width: ${(768)};
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
