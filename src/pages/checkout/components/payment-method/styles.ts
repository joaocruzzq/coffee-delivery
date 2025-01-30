import styled from "styled-components";

export const PaymentMethodContainer = styled.button`
   padding: 1rem;
   display: flex;

   gap: 0.75rem;
   border-radius: 6px;

   min-width: 11.15rem;

   cursor: pointer;
   align-items: center;

   border: 0;

   font-size: 0.75rem;
   text-transform: uppercase;

   color: ${props => props.theme["base-text"]};
   background: ${props => props.theme["base-button"]};

   &:hover {
      background: ${props => props.theme["base-hover"]};
   }

   svg {
      width: 1rem;
      height: 1rem;
      color: ${props => props.theme.purple};
   }
`