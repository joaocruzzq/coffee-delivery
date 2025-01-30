import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
   display: flex;
   padding: 0.5rem 0.25rem;

   justify-content: space-between;

   strong::before {
      content: 'R$ ';
   }

   .coffeInfo {
      display: flex;

      gap: 1.25rem;
      align-items: center;
   }

   .coffeInfo > img {
      width: 4rem;
      height: 4rem;
   }

   .details {
      display: flex;
      flex-direction: column;

      gap: 0.5rem;
      color: ${props => props.theme["base-subtitle"]};
   }

   .actions {
      display: flex;
      gap: 0.5rem;
   }

   .actions > button {
      display: flex;
      align-items: center;

      gap: 0.25rem;
      padding: 0.5rem;

      font-size: 0.75rem;
      text-transform: uppercase;

      border: none;
      border-radius: 6px;

      cursor: pointer;
      transition: background 0.1s;

      color: ${props => props.theme["base-text"]};
      background: ${props => props.theme["base-button"]};

      svg {
         color: ${props => props.theme.purple};
      }

      &:hover {
         background: ${props => props.theme["base-hover"]};
      }
   }
`