import { useState } from "react";
import { StepperContainer } from "./styles";

import { Minus, Plus } from "phosphor-react";

interface StepperProps {
   initialValue: number
   onChange: (quantity: number) => void
}

export function Stepper({ initialValue, onChange }: StepperProps) {
   const [itemQuantity, setItemQuantity] = useState(initialValue)
   
   function increaseItemQuantity() {
      setItemQuantity(itemQuantity + 1)
      onChange(itemQuantity + 1)
   }
         
   function decreaseItemQuantity() {
      if(itemQuantity > 0) {
         setItemQuantity(itemQuantity - 1)
         onChange(itemQuantity - 1)
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