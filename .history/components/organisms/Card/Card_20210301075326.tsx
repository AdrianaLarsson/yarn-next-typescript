//Components
import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/'
import px2vw from '../../../styles/px2vw';

const StyledCard = styled(Card)`
display: flex;
width: ${px2vw(280, 315)};
height: 5em;
margin: ${px2vw(32)};
padding-left: 5px;
background-color: rgba(0,0,0,0.0);
box-shadow: 0 1px 3px 0 rgba(0,0,0, 1.5);
border-radius: 4px;
@media (min-width: 1024px) {
    width: ${px2vw(10, 150)};
  }
`;
export default StyledCard;
