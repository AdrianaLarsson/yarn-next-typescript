import React from "react";
import styled from "styled-components";
import { B4 } from "../../styles/Typography/texStyles";
import StyledCard from "../organisms/Card/Card";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: 50px 50px;
  grid-gap: 80px;
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
        <B4>ActivitetsTitel</B4
      </StyledCard>
      

    </div>
  );
}

export default vehicleOpreator;
