import React from "react";
import styled from "styled-components";
import { B4,H2 } from "../../styles/Typography/texStyles";
import StyledCard from "../organisms/Card/Card";

export const GridTitle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 90px;

`;
export const GridBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 30px 5px;
  grid-gap: 10px;
`;

function vehicleOpreator() {
  return (
    <div>
      Fordons operatör Arbetsorder
      <StyledCard>
        <GridTitle>
          <B4>ActivitetsTitel</B4>
          <B4 style={{ fontSize: "17px" }}>12: 00 - 13:00</B4>
        </GridTitle>
      
       {  <GridBody>
        <H2>Ankomsttid</H2>
        <H2>Avgångstid</H2>
        </GridBody> }
      </StyledCard>
      

    </div>
  );
}

export default vehicleOpreator;
