import { PaymentMethodContainer } from "./styles";

import { ReactNode } from "react";

interface PaymentMethodProps {
   icon: ReactNode
   method: string
}

export function PaymentMethod(props: PaymentMethodProps) {
   return (
      <PaymentMethodContainer type="button" >
         {props.icon}
         {props.method}
      </PaymentMethodContainer>
   )
}