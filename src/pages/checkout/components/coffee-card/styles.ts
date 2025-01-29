import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
   display: flex;
   padding: 0.5rem 0.25rem;

   justify-content: space-between;

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
`