import { CoffeeCardContainer } from "./styles";

import { Stepper } from "../../../../components/stepper";

import { Trash } from "phosphor-react";

import { CoffeeOnCartProps } from "../../../../context/coffee-cart-context";

interface CoffeeCardOnOrder {
   coffee: CoffeeOnCartProps
}

export function CoffeeCard({ coffee }: CoffeeCardOnOrder) {
   return (
      <CoffeeCardContainer>
         <div className="coffeInfo">
            <img src={coffee.img} alt="" />

            <div className="details">
               <span>{coffee.name}</span>

               <div className="actions">
                  <Stepper />

                  <button>
                     <Trash size={16} />
                     Remover
                  </button>
               </div>
            </div>
         </div>

         <strong>{coffee.price}</strong>
      </CoffeeCardContainer>
   )
}