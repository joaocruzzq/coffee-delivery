import styled from "styled-components";

export const StepperContainer = styled.div`
   display: flex;
   width: 4.5rem;

   padding: 0.5rem;

   align-items: center;
   justify-content: space-between;

   border-radius: 6px;
   background: ${props => props.theme["base-button"]};

   svg {
      cursor: pointer;
      color: ${props => props.theme.purple};
   }
`