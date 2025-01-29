import styled from "styled-components";

export const ButtonContainer = styled.button`
   border-radius: 6px;
   padding: 0.75rem 0.5rem;

   border: none;
   cursor: pointer;

   line-height: 160%;
   font-weight: bold;
   font-size: 0.875rem;
   
   text-transform: uppercase;
   transition: background 0.1s;
   
   color: ${props => props.theme.white};
   background: ${props => props.theme.yellow};

   &:hover {
      background: ${props => props.theme["yellow-dark"]};
   }
`