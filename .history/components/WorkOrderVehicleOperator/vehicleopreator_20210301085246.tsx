import React from "react";
import styled from "styled-components";
import { B4,H2 } from "../../styles/Typography/texStyles";
import StyledCard from "../organisms/Card/Card";

export const GridTitle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  @media (min-width: 320px) {
    grid-gap: 90px;
  }

`;
export const GridBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 50px;
`;

function vehicleOpreator() {
  return (
    <div>
      Fordons operatör Arbetsorder
      <StyledCard>
        <GridTitle>
          <B4>ActivitetsTitel</B4>
          <B4 style={{ fontSize: "17px" }}>12:00 - 13:00</B4>
        </GridTitle>
        <GridBody>
        <H2>Ankomsttid</H2>
        <H2>Avgångstid</H2>
        <H2>Spår</H2>
        </GridBody> 
        <GridBody>
        <p>11:00</p> 
        <p>14:00</p>
        <p>14:00</p>
        </GridBody>
        
      </StyledCard>
      

    </div>
  );
}

export default vehicleOpreator;
