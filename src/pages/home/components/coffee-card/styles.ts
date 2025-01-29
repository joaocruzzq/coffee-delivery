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

   .actions > div {
      display: flex;
      width: 4.5rem;

      padding: 0.5rem;

      align-items: center;
      justify-content: space-between;

      border-radius: 6px;
      background: ${props => props.theme["base-button"]};

      span {

      }

      svg {
         cursor: pointer;
         color: ${props => props.theme.purple};
      }
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
`