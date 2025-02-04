import styled from "styled-components";

export const SuccessContainer = styled.div`
   display: grid;

   align-items: end;
   padding: 4.45rem 10rem;

   grid-column-gap: 6.375rem;
   grid-template-columns: 1fr auto;

   grid-template-areas: 'h1 h1' 'span img' 'card img';

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

      z-index: 1;
      position: relative;

      gap: 2rem;
      padding: 2.5rem;
      
      border-top-left-radius: 6px;
      border-top-right-radius: 36px;

      border-bottom-left-radius: 36px;
      border-bottom-right-radius: 6px;

      background: ${props => props.theme.background};
   }

   .deliveryInfoCard::before {
      content: '';
      
      inset: 0;
      z-index: -2;
      
      position: absolute;
      border-radius: inherit;

      background: linear-gradient(120deg, ${props => props.theme.yellow}, ${props => props.theme.purple});
   }

   .deliveryInfoCard::after {
      content: '';

      inset: 1px;
      z-index: -1;

      position: absolute;
      border-radius: inherit;

      background: ${props => props.theme.background};
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

   @media(max-width: 768px) {
      padding: 5rem 2.5rem;

      grid-template-columns: 1fr;
      grid-template-areas: "h1" "span" "img" "card";

      img {
         width: 100%;
         margin-bottom: 2.5rem;
      }

      .deliveryInfoCard {
         row-gap: 2.5rem;
         padding: 4rem 2.5rem;
      }

      .deliveryInfoCard div {
         column-gap: 1.25rem;
      }
   }
`