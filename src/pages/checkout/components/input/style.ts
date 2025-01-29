import { styled } from "styled-components";

export const InputContainer = styled.label`   
   display: flex;
   position: relative;

   align-items: center;
   justify-content: flex-end;
`

export const InputContent = styled.input`
   width: 100%;
   padding: 0.75rem;
   border-radius: 4px;

   background: ${props => props.theme["base-input"]};
   border: 1px solid ${props => props.theme["base-button"]};

   font-size: 0.875rem;
   color: ${props => props.theme["base-text"]};

   &:focus {
      box-shadow: 0 0 0 1px ${props => props.theme["yellow-dark"]};
   }

   &::placeholder {
      color: ${props => props.theme["base-label"]};
   }
`

export const IsOptionalMessage = styled.span`
   display: flex;
   align-items: center;

   margin: 1.25rem;
   position: absolute;

   font-size: 0.75rem;
   font-style: italic;
   color: ${props => props.theme["base-label"]};
`