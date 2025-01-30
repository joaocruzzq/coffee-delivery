import { useState } from "react";
import { StepperContainer } from "./styles";

import { Minus, Plus } from "phosphor-react";

export function Stepper() {
   const [itemQuantity, setItemQuantity] = useState(0)

   function increaseItemQuantity() {
      setItemQuantity(itemQuantity + 1)
   }

   function decreaseItemQuantity() {
      if(itemQuantity > 0) {
         setItemQuantity(itemQuantity - 1)
      }
   }

   return (
      <StepperContainer>
         <Minus size={14} weight="bold" onClick={decreaseItemQuantity} />
            {itemQuantity}
         <Plus size={14} weight="bold" onClick={increaseItemQuantity} />
      </StepperContainer>
   )
}