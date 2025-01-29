import { CoffeeCardContainer } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

import coffeeIMG from "../../../../assets/Type=Expresso.png"

export function CoffeeCard() {
   return (
      <CoffeeCardContainer>
         <img src={coffeeIMG} alt="" />

         <div className="tags">
            <strong>TRADICIONAL</strong>
            <strong>TAG 02</strong>
            <strong>TAG 03</strong>
         </div>

         <h1>Expresso Tradicional</h1>
         <span>O tradicional café feito com água quente e grãos moídos</span>

         <div className="buy-section">
            <h1>9,90</h1>

            <div className="actions">
               <div>
                  <Minus size={14} weight="bold" />
                  0
                  <Plus size={14} weight="bold" />
               </div>

               <button>
                  <ShoppingCart size={22} weight="fill" />
               </button>
            </div>
         </div>
      </CoffeeCardContainer>
   )
}