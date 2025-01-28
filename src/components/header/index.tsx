import { ActionButtons, HeaderContainer } from "./styles";

import mainLogo from "../../assets/main-logo.png"
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
   return (
      <HeaderContainer>
         <img src={mainLogo} alt="" />

         <ActionButtons>
            <span>
               <MapPin size={22} weight="fill" />
               Porto Alegre, RS
            </span>

            <button>
               <ShoppingCart size={22} weight="fill" />
            </button>
         </ActionButtons>
      </HeaderContainer>
   )
}