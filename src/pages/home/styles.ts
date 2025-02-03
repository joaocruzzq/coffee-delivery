import styled from "styled-components";

export const IntroContainer = styled.div`
   display: grid;
   grid-template-areas: 'title img' 'items img';

   max-width: 100%;

   column-gap: 3.5rem;
   padding: 5.875rem 10rem 6.75rem;

   background-image: url("src/assets/background.png");

   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

   img {
      grid-area: img;
   }

   @media(max-width: 768px) {
      display: grid;

      text-align: justify;
      padding: 2rem 2.5rem;

      gap: 2.25rem;

      grid-template-columns: 1fr;
      grid-template-areas: 'title' 'img' 'items';

      img {
         width: 100%;
         margin-bottom: 1rem;
      }
   }
`

export const IntroTitle = styled.div`
   display: flex;
   flex-direction: column;
   
   gap: 1rem;
   grid-area: title;

   max-width: 100%;

   h1 {
      font-size: 3rem;
      line-height: 130%;

      font-weight: bolder;
      font-family: 'Baloo 2', sans-serif;

      color: ${props => props.theme["base-title"]};
   }

   p {
      line-height: 130%;
      font-size: 1.25rem;

      color: ${props => props.theme["base-subtitle"]};
   }

   @media(max-width: 768px) {
      h1 {
         font-size: 2.25rem;
      }
   }
`

export const ItemsContainer = styled.div`
   grid-area: items;

   display: grid;
   grid-template-columns: auto auto;

   div {
      gap: 0.5rem;
      
      display: grid;
      grid-template-columns: auto 1fr;

      align-items: center;
   }

   div > svg {
      padding: 0.5rem;

      background: white;
      border-radius: 50%;

      color: ${props => props.theme.background};
   }

   div:nth-child(1) > svg {
      background: ${props => props.theme["yellow-dark"]}
   }

   div:nth-child(2) > svg {
      background: ${props => props.theme["base-text"]}
   }

   div:nth-child(3) > svg {
      background: ${props => props.theme.yellow}
   }

   div:nth-child(4) > svg {
      background: ${props => props.theme.purple}
   }

   @media(max-width: 768px) {
      row-gap: 1rem;
      column-gap: 0.5rem;

      div {
         text-align: left;
         font-size: 1rem;
      }
   }
`

export const CoffeeList = styled.div`
   padding: 2rem 10rem;

   width: 100%;
   max-width: 100%;

   box-sizing: border-box;

   h1 {
      font-family: 'Baloo 2', sans-serif;
      color: ${props => props.theme["base-subtitle"]};
   }

   > div {
      display: grid;
      padding: 3.375rem 0;

      width: 100%;
      max-width: 100%;

      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      grid-row-gap: 2.5rem;
      grid-column-gap: 2rem;
   }

   @media(max-width: 786px) {
      padding: 2.5rem;

      div {
         column-gap: 1rem;
         grid-template-columns: 1fr 1fr;
      }
   }
`