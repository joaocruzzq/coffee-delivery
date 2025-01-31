import styled from "styled-components";

export const HeaderContainer = styled.header`
   padding: 2rem 10rem;

   display: flex;
   justify-content: space-between;

   &:first-child > a {
      height: 2.5rem;
      
      outline: none;
      box-shadow: none;
   }
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

   strong {
      display: flex;

      width: 1.25rem;
      height: 1.25rem;

      border-radius: 50%;
      position: absolute;

      top: -0.5rem;
      left: 1.65rem;

      align-items: center;
      justify-content: center;
      
      font-size: 0.75rem;
      line-height: 130%;

      color: ${props => props.theme.white};
      background: ${props => props.theme["yellow-dark"]};
   }

   a {
      display: flex;

      border: none;
      font-size: 0;

      width: 2.5rem;
      cursor: pointer;

      padding: 0.5rem;
      border-radius: 6px;

      position: relative;

      align-items: center;
      justify-content: center;

      color: ${props => props.theme["yellow-dark"]};
      background-color: ${props => props.theme["yellow-light"]};
   }
`