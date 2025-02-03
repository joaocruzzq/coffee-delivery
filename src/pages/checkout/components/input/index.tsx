import { InputContainer, InputContent, IsOptionalMessage } from "./style";

import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   isOptional?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   return (
      <InputContainer>
         <InputContent ref={ref} {...props}/>

         {props.isOptional && <IsOptionalMessage>Opicional</IsOptionalMessage>}
      </InputContainer>
   )
})