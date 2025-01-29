import { CheckoutContainer, FormContainer } from "./styles";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { Input } from "./components/input";
import { PaymentMethod } from "./components/paymentMethod";

export function Checkout() {
   return (
      <CheckoutContainer>
         <h1>Complete seu pedido</h1>
         <h1>Cafés selecionados</h1>

         <form action="">
            <FormContainer className="deliveryInfo">
               <header>
                  <MapPinLine size={22} />
                  <div className="deliveryHeaderInfo">
                     <span>Endereço de Entrega</span>
                     <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
               </header>

               <div className="deliveryInputs">
                  <Input type="text" placeholder="CEP" />
                  <Input type="text" placeholder="Rua" />

                  <div>
                     <Input type="text" placeholder="Número" />
                     <Input type="text" placeholder="Complemento" isOptional />
                  </div>

                  <div>
                     <Input type="text" placeholder="Bairro" />
                     <Input type="text" placeholder="Cidade" />
                     <Input type="text" placeholder="UF" />
                  </div>
               </div>
            </FormContainer>

            <FormContainer>
               <header>
                  <CurrencyDollar size={22} />
                  <div className="deliveryHeaderInfo">
                     <span>Pagamento</span>
                     <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                  </div>
               </header>

               <div className="paymentMethodSection">
                  <PaymentMethod icon={<CreditCard />} method="cartão de crédito" />
                  <PaymentMethod icon={<Bank />} method="cartão de débito" />
                  <PaymentMethod icon={<Money />} method="dinheiro" />
               </div>
            </FormContainer>
         </form>
      </CheckoutContainer>
   )
}