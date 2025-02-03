import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
   padding: 1rem;
   display: flex;

   gap: 0.75rem;
   border-radius: 6px;

   position: relative;

   min-width: 11.15rem;

   align-items: center;

   font-size: 0.75rem;
   text-transform: uppercase;

   color: ${props => props.theme["base-text"]};
   background: ${props => props.theme["base-button"]};   

   &:hover {
      background: ${props => props.theme["base-hover"]};
   }

   &:has(input:checked) {
      box-shadow: 0 0 0 1px ${props => props.theme.purple};
      background: ${props => props.theme["purple-light"]};
   }

   input {
      width: 100%;
      height: 100%;

      opacity: 0;
      cursor: pointer;
      position: absolute;
   }

   svg {
      width: 1rem;
      height: 1rem;
      color: ${props => props.theme.purple};
   }
`