import styled from "styled-components";

export const CheckoutContainer = styled.div`
   padding: 2.5rem 10rem;

   display: grid;
   grid-template-areas: 'h1 h1' 'form form';

   column-gap: 2rem;

   h1 {
      font-size: 1.125rem;
      font-family: 'Baloo 2', sans-serif;
      color: ${props => props.theme["base-subtitle"]};
   }

   form {
      display: flex;
      flex-direction: column;

      margin-top: 1rem;
      row-gap: 0.75rem;

      div:nth-child(1) svg {
         color: ${props => props.theme["yellow-dark"]};
      }

      div:nth-child(2) svg {
         color: blue;
      }
   }
`

export const FormContainer = styled.div`
   display: flex;
   flex-direction: column;

   gap: 2rem;
   padding: 2.5rem;
   border-radius: 6px;
   background: ${props => props.theme["base-card"]};

   header {
      display: flex;

      gap: 0.5rem;
      align-items: start;
   }

   .deliveryHeaderInfo {
      display: flex;
      flex-direction: column;

      gap: 2px;

      span {
         color: ${props => props.theme["base-subtitle"]};
      }

      p {
         font-size: 0.875rem;
         color: ${props => props.theme["base-text"]};
      }
   }

   .deliveryInputs {
      display: grid;
      gap: 1rem;

      label:first-child, div > label:first-child {
         width: 12.5rem;
      }

      div {
         display: flex;
         gap: 0.75rem;
      }

      div > label:nth-child(2) {
         flex: 1;
      }

      div:last-child > label:last-child {
         width: 3.75rem;
      }
   }
`