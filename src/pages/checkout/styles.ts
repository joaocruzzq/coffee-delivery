import styled from "styled-components";

export const CheckoutContainer = styled.div`
   padding: 2.5rem 10rem;

   form {
      display: grid;
      
      row-gap: 0.75rem;
      column-gap: 2rem;
      
      margin-top: 1rem;
      align-items: start;

      grid-template-columns: auto 28rem;
      grid-template-areas: 'title1 title2' 'form1 order' 'form2 order';

      h1 {
         font-size: 1.125rem;
         font-family: 'Baloo 2', sans-serif;
         color: ${props => props.theme["base-subtitle"]};
      }

      div:nth-child(3) svg {
         color: ${props => props.theme["yellow-dark"]};
      }

      div:nth-child(4) svg {
         color: ${props => props.theme.purple};
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

   &:first-child {
      grid-area: form1;
   }

   &:last-child {
      grid-area: form2;
   }

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

   .paymentMethodSection {
      display: flex;
      gap: 0.75rem;
   }
`

export const OrderContainer = styled.div`
   display: grid;
   grid-area: order;

   gap: 1.5rem;
   padding: 2.5rem;

   border-top-left-radius: 6px;
   border-bottom-left-radius: 44px;

   border-top-right-radius: 44px;
   border-bottom-right-radius: 6px;

   background: ${props => props.theme["base-card"]};

   .divider {
      height: 1px;
      width: 100%;

      background: ${props => props.theme["base-button"]};
   }

   .orderPricing {
      display: grid;
      gap: 0.75rem;

      div {
         display: flex;
         justify-content: space-between;
      }

      div > p {
         font-size: 0.875rem;
         color: ${props => props.theme["base-text"]};
      }

      div:last-child > span{
         font-weight: bold;
         font-size: 1.25rem;
         color: ${props => props.theme["base-subtitle"]};
      }
   }
`