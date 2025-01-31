import { ActionButtons, HeaderContainer } from "./styles";

import mainLogo from "../../assets/main-logo.png"

import { MapPin, ShoppingCart } from "phosphor-react";

import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { CoffeeCartContext } from "../../context/coffee-cart-context";

export function Header() {
   const { coffeesOnCart } = useContext(CoffeeCartContext)

   const totalCoffeesOnOrder = coffeesOnCart.reduce((total, coffee) => total + coffee.quantity, 0)

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
               {coffeesOnCart.length > 0 && <strong>{totalCoffeesOnOrder}</strong>}
               <ShoppingCart size={22} weight="fill" />
            </NavLink>
         </ActionButtons>
      </HeaderContainer>
   )
}