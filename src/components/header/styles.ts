import styled from "styled-components";

export const HeaderContainer = styled.header`
   padding: 2rem 10rem;

   display: flex;
   justify-content: space-between;
`

export const ActionButtons = styled.div`
   display: flex;
   gap: 0.75rem;

   span {
      display: flex;

      gap: 0.25rem;
      padding: 0.5rem;

      border-radius: 8px;
      align-items: center;

      font-size: 0.875rem;

      color: ${props => props.theme["purple-dark"]};
      background-color: ${props => props.theme["purple-light"]};

      svg {
         color: ${props => props.theme.purple};
      }
   }

   button {
      border: none;
      font-size: 0;

      width: 2.5rem;
      cursor: pointer;

      padding: 0.5rem;
      border-radius: 6px;

      color: ${props => props.theme["yellow-dark"]};
      background-color: ${props => props.theme["yellow-light"]};
   }
`