import { InputContainer, InputContent, IsOptionalMessage } from "./style";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   isOptional?: boolean
}

export function Input(props: InputProps) {
   return (
      <InputContainer>
         <InputContent {...props}/>

         {props.isOptional && <IsOptionalMessage>Opicional</IsOptionalMessage>}
      </InputContainer>
   )
}