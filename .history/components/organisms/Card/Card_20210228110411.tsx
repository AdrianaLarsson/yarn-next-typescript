//Components
import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/'

const StyledCard = styled(Card)`
display: flex;
width: ${(320)};
min-height: ${(20)};
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
background-color: rgba(0,0,0,0.0);
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 1.4);
border-radius: 4px;

`;
export default StyledCard;
