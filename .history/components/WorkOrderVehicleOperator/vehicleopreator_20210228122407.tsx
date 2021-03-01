import React from "react";
import styled from "styled-components";
import { B4 } from "../../styles/Typography/texStyles";
import StyledCard from "../organisms/Card/Card";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 60px;
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
        <Grid
      </StyledCard>
      

    </div>
  );
}

export default vehicleOpreator;
