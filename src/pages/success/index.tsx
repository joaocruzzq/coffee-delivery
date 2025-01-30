import { SuccessContainer } from "./styles";

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import successPageIllustration from "../../assets/Illustration.png"

export function Success() {
   return (
      <SuccessContainer>
         <h1>Uhu! Pedido confirmado</h1>
         <span>Agora é só aguardar que logo o café chegará até você</span>

         <div className="deliveryInfoCard">
            <div>
               <MapPin size={32} weight="fill" />
               <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
               <p>Farrapos - Porto Alegre, RS</p>
            </div>

            <div>
               <Timer size={32} weight="fill" />
               <p>Previsão de entrega</p>
               <strong>20 min - 30 min</strong>
            </div>


            <div>
               <CurrencyDollar size={32} weight="fill" />
               <p>Pagamento na entrega</p>
               <strong>Cartão de Crédito</strong>
            </div>
         </div>

         <img src={successPageIllustration} alt="" />
      </SuccessContainer>
   )
}