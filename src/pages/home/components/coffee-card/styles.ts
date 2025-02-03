import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
   width: 16rem;
   height: 19.375rem;

   display: flex;
   flex-direction: column;

   align-items: center;
   padding: 0 1.25rem 1.25rem;

   border-top-left-radius: 6px;
   border-bottom-left-radius: 36px;

   border-top-right-radius: 36px;
   border-bottom-right-radius: 6px;

   background: ${props => props.theme["base-card"]};

   img {
      width: 7.5rem;
      height: 7.5rem;
      margin: -1.25rem auto 0.75rem;
   }

   .tags {
      display: flex;
      gap: 4px;
   }

   .tags > strong {
      padding: 4px 8px;
      
      font-weight: bold;
      font-size: 0.625rem;

      border-radius: 6.25rem;

      text-transform: uppercase;

      color: ${props => props.theme["yellow-dark"]};
      background: ${props => props.theme["yellow-light"]};
   }

   h1 {
      font-size: 1.25rem;
      margin: 1rem 0 0.5rem;
      color: ${props => props.theme["base-subtitle"]};
   }

   span {
      text-align: center;
      font-size: 0.875rem;
      margin-bottom: 2rem;
      color: ${props => props.theme["base-label"]};
   }

   .buy-section {
      width: 100%;

      display: flex;
      gap: 1.5rem;

      align-items: center;
      justify-content: center;

      h1::before {
         content: 'R$ ';
         font-weight: normal;
         font-size: 0.875rem;
         font-family: 'Roboto', sans-serif;
      }

      h1 {
         margin: 0;
         font-size: 1.5rem;
         font-weight: bolder;
         font-family: 'Baloo 2', sans-serif;
         color: ${props => props.theme["base-text"]};
      }
   }

   .actions {
      display: flex;
      gap: 8px;
   }

   .actions > button {
      font-size: 0;
      padding: 8px;

      cursor: pointer;

      border: none;
      border-radius: 6px;

      color: ${props => props.theme["base-card"]};
      background: ${props => props.theme["purple-dark"]};

      transition: background 0.1s;

      &:hover {
         background: ${props => props.theme.purple};
      }
   }

   @media(max-width: 768px) {
      width: 12.875rem;
      height: 17.25rem;

      img {
         width: 6.5rem;
         height: 6.5rem;
      }

      .tags {
         display: none;
      }

      h1 {
         text-align: center;
         line-height: 115%;

         margin: 0 auto 1.5rem;
         min-height: calc(1rem * 2);
      }

      span {
         text-align: justify;
         line-height: 130%;
         
         margin-bottom: -0.25rem;
         min-height: calc(1.25rem * 3);
      }

      .buy-section {
         margin-top: 0.25rem;
      }

      .buy-section h1 {
         font-size: 1.875rem;
      }
      
      .actions div:first-child {
         display: none;
      }
   }
`