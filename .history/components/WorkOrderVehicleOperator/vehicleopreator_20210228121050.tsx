import React from 'react'
import styled from 'styled-components';
import { B4 } from '../../styles/Typography/texStyles'
import StyledCard from '../organisms/Card/Card'

export const Grid = styled.div`
display: grid
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 50px 50px
grid-gap: 5px
`;
function vehicleOpreator() {


    return (
        <div>
            Fordons operatör Arbetsorder
         <StyledCard>
             <Grid>        <B4>ActivitetsTitel</B4> 
</Grid>
         </StyledCard>
         <StyledCard>
             ActivitetsTitel
         </StyledCard>
         <StyledCard>
             ActivitetsTitel
         </StyledCard>
        </div>
    )
}

export default vehicleOpreator
