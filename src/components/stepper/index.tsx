import { StepperContainer } from "./styles";

import { Minus, Plus } from "phosphor-react";

export function Stepper() {
   return (
      <StepperContainer>
         <Minus size={14} weight="bold" />
            0
         <Plus size={14} weight="bold" />
      </StepperContainer>
   )
}