//Components
import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/'

const StyledCard = styled(Card)`
display: flex;
width: ${Glob(320, 320)};
height: 5em;
margin: 10px;
padding-left: 5px;
background-color: rgba(0,0,0,0.0);
box-shadow: 0 1px 3px 0 rgba(0,0,0, 1.5);
border-radius: 4px;
`;
export default StyledCard;
