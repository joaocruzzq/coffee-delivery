import styled from "styled-components";

export const SuccessContainer = styled.div`
   display: grid;
   padding: 4.45rem 10rem;

   grid-template-columns: 1fr auto;

   grid-template-areas: 'h1 h1' 'span img' 'card img';

   align-items: end;
   grid-column-gap: 6.375rem;

   img {
      grid-area: img;
   }

   h1 {
      grid-area: h1;
      font-size: 2rem;
      font-weight: bolder;
      font-family: 'Baloo 2', sans-serif;
      color: ${props => props.theme["yellow-dark"]};
   }

   span {
      grid-area: span;
      font-size: 1.25rem;
      margin: 0.25rem 0 2.5rem;
      color: ${props => props.theme["base-subtitle"]};
   }

   .deliveryInfoCard {
      grid-area: card;
      display: flex;
      flex-direction: column;

      gap: 2rem;
      padding: 2.5rem;
      
      border: 1px solid black;

      border-top-left-radius: 6px;
      border-top-right-radius: 36px;

      border-bottom-left-radius: 36px;
      border-bottom-right-radius: 6px;
   }

   .deliveryInfoCard > div {
      display: grid;

      grid-template-areas:
      'icon text1' 'icon text2';

      grid-template-columns: 2rem 1fr;
      grid-column-gap: 0.75rem;

      align-items: center;
      justify-content: start;

      &:first-child > svg {
         background: ${props => props.theme.purple};
      }

      &:nth-child(2) > svg {
         background: ${props => props.theme.yellow};
      }

      &:nth-child(3) > svg {
         background: ${props => props.theme["yellow-dark"]};
      }
   }

   .deliveryInfoCard > div svg {
      grid-area: icon;
      padding: 0.5rem;
      border-radius: 50%;
      color: ${props => props.theme.background}
   }
`