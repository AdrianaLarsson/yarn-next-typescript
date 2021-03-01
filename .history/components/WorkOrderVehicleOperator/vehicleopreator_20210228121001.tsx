import React from 'react'
import { B4 } from '../../styles/Typography/texStyles'
import StyledCard from '../organisms/Card/Card'

function vehicleOpreator() {
    export const Grid = styled.div`
    display: grid
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px 50px
    grid-gap: 5px
  `;

    return (
        <div>
            Fordons operatör Arbetsorder
         <StyledCard>
             <Grid></Grid>
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
