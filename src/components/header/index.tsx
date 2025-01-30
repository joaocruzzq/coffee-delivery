import { ActionButtons, HeaderContainer } from "./styles";

import mainLogo from "../../assets/main-logo.png"

import { MapPin, ShoppingCart } from "phosphor-react";

import { NavLink } from "react-router-dom";

export function Header() {
   return (
      <HeaderContainer>
         <NavLink to="/">
            <img src={mainLogo} alt="" />
         </NavLink>

         <ActionButtons>
            <span>
               <MapPin size={22} weight="fill" />
               Porto Alegre, RS
            </span>

            <NavLink to="/checkout">
               <ShoppingCart size={22} weight="fill" />
            </NavLink>
         </ActionButtons>
      </HeaderContainer>
   )
}