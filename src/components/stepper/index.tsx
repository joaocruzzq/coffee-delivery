import { StepperContainer } from "./styles";

import { Minus, Plus } from "phosphor-react";

interface StepperProps {
   itemQuantity: number
   onIncreaseItemQuantity: () => void
   onDecreaseItemQuantity: () => void
}

export function Stepper({itemQuantity, onDecreaseItemQuantity, onIncreaseItemQuantity}: StepperProps) {
   function handleIncreaseItemQuantity() {
      onIncreaseItemQuantity()
   }

   function handleDecreaseItemQuantity() {
      onDecreaseItemQuantity()
   }

   return (
      <StepperContainer>
         <Minus size={14} weight="bold" onClick={handleDecreaseItemQuantity} />
            {itemQuantity}
         <Plus size={14} weight="bold" onClick={handleIncreaseItemQuantity} />
      </StepperContainer>
   )
}