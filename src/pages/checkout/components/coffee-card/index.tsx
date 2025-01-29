import { CoffeeCardContainer } from "./styles";

import coffeeIMG from "../../../../assets/Type=Americano.png"

export function CoffeeCard() {
   return (
      <CoffeeCardContainer>
         <div className="coffeInfo">
            <img src={coffeeIMG} alt="" />

            <div className="details">
               <span>Expresso Tradicional</span>

               <div className="actions">
                  <span>botao01</span>
                  <span>botao02</span>
               </div>
            </div>
         </div>

         <strong>R$ 9,90</strong>
      </CoffeeCardContainer>
   )
}