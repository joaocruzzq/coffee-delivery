import { SuccessContainer } from "./styles";

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import successPageIllustration from "../../assets/Illustration.png"

import { useContext } from "react";
import { CoffeeCartContext } from "../../context/coffee-cart-context";

export function Success() {
   const { deliveryData } = useContext(CoffeeCartContext)

   const { city, neighborhood, number, payment, street, uf, complement} = deliveryData

   return (
      <SuccessContainer>
         <h1>Uhu! Pedido confirmado</h1>
         <span>Agora é só aguardar que logo o café chegará até você</span>

         <div className="deliveryInfoCard">
            <div>
               <MapPin size={32} weight="fill" />
               <p>Entrega em
                  <strong> Rua {street}, {number} - {complement && (`${complement}`)} </strong>
               </p>

               <p>{neighborhood} - {city}, {uf}</p>
            </div>

            <div>
               <Timer size={32} weight="fill" />
               <p>Previsão de entrega</p>
               <strong>20 min - 30 min</strong>
            </div>


            <div>
               <CurrencyDollar size={32} weight="fill" />
               <p>Pagamento na entrega</p>
               <strong>{payment}</strong>
            </div>
         </div>

         <img src={successPageIllustration} alt="" />
      </SuccessContainer>
   )
}