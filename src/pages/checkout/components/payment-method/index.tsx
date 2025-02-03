import { PaymentMethodContainer } from "./styles";

import { ReactNode } from "react";
import { useFormContext } from "react-hook-form"

interface PaymentMethodProps {
   icon: ReactNode
   method: string
   value: string
}

export function PaymentMethod(props: PaymentMethodProps) {
   const { register } = useFormContext()

   return (
      <PaymentMethodContainer  >
         <input type="radio" value={props.value} {...register("payment")} />
         {props.icon} {props.method}
      </PaymentMethodContainer>
   )
}