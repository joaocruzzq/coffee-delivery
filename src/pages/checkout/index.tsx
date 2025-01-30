import { CheckoutContainer, FormContainer, OrderContainer } from "./styles";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { Input } from "./components/input";
import { Button } from "./components/button";
import { CoffeeCard } from "./components/coffee-card";
import { PaymentMethod } from "./components/payment-method";

export function Checkout() {
   return (
      <CheckoutContainer>
         <form action="">
            <h1>Complete seu pedido</h1>

            <h1>Cafés selecionados</h1>

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
            
            <OrderContainer>
               <CoffeeCard />
               <div className="divider" />

               <div className="orderPricing">
                  <div>
                     <p>Total de itens</p>
                     <span>R$ 29,70</span>
                  </div>

                  <div>
                     <p>Entrega</p>
                     <span>R$ 3,50</span>
                  </div>

                  <div>
                     <span>Total</span>
                     <span>R$ 33,20</span>
                  </div>
               </div>

               <Button />
            </OrderContainer>
         </form>
      </CheckoutContainer>
   )
}