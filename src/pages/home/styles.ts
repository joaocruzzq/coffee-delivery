import styled from "styled-components";

export const IntroContainer = styled.div`
   display: grid;
   grid-template-areas: 'title img' 'items img';

   column-gap: 3.5rem;
   padding: 5.875rem 10rem 6.75rem;

   background-image: url("src/assets/background.png");

   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

   img {
      grid-area: img;
   }
`

export const IntroTitle = styled.div`
   display: flex;
   flex-direction: column;
   
   gap: 1rem;
   grid-area: title;

   width: 36.75rem;

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
`

export const ItemsContainer = styled.div`
   grid-area: items;

   display: grid;
   grid-template-columns: auto auto;

   div {
      display: flex;
      gap: 0.5rem;

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
`