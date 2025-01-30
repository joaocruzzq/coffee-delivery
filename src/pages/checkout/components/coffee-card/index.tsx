import { CoffeeCardContainer } from "./styles";

import coffeeIMG from "../../../../assets/Type=Americano.png"

import { Stepper } from "../../../../components/stepper";

import { Trash } from "phosphor-react";

export function CoffeeCard() {
   return (
      <CoffeeCardContainer>
         <div className="coffeInfo">
            <img src={coffeeIMG} alt="" />

            <div className="details">
               <span>Expresso Tradicional</span>

               <div className="actions">
                  <Stepper />

                  <button>
                     <Trash size={16} />
                     Remover
                  </button>
               </div>
            </div>
         </div>

         <strong>R$ 9,90</strong>
      </CoffeeCardContainer>
   )
}