import React from "react";
import styled from "styled-components";
import { B4,H2 } from "../../styles/Typography/texStyles";
import StyledCard from "../organisms/Card/Card";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 5px 5px
`;

function vehicleOpreator() {
  return (
    <div>
      Fordons operatör Arbetsorder
      <StyledCard>
        <Grid>
          <B4>ActivitetsTitel</B4>
          <B4 style={{ fontSize: "17px" }}>12: 00 - 13:00</B4>
  
        </Grid>
        <Grid>
        <H2>Ankomsttid</H2>
        <H2>Avgångstid</H2>
        </Grid>
      </StyledCard>
      

    </div>
  );
}

export default vehicleOpreator;
