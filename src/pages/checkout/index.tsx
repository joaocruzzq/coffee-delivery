import { CheckoutContainer, FormContainer, OrderContainer } from "./styles";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { Input } from "./components/input";
import { Button } from "./components/button";
import { CoffeeCard } from "./components/coffee-card";
import { PaymentMethod } from "./components/payment-method";

import { useContext } from "react";
import { CoffeeCartContext } from "../../context/coffee-cart-context";

export function Checkout() {
   const { coffeesOnCart } = useContext(CoffeeCartContext)

   const deliveryPrice = (3.5).toFixed(2)

   const totalOrderPrice = coffeesOnCart.reduce((total, coffee) => total + coffee.quantity * coffee.price, 0).toFixed(2)

   const totalOrderPriceWithDelivery = (Number(totalOrderPrice) + Number(deliveryPrice)).toFixed(2)

   return (
      <CheckoutContainer>
         <form action="">
            <h1>Complete seu pedido</h1>

            <h1>Cafés selecionados</h1>

            <FormContainer className="deliveryInfo">
               <header>
                  <MapPinLine size={22} className="pinIcon" />
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
                  <CurrencyDollar size={22} className="dollarIcon" />
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
               <div className="coffeesOnOrder">
               {coffeesOnCart.map(coffee => (
                  <>
                     <CoffeeCard coffee={coffee} />
                     <div className="divider" />
                  </>
               ))}
               </div>

               <div className="orderPricing">
                  <div>
                     <p>Total de itens</p>
                     <span>{totalOrderPrice}</span>
                  </div>

                  <div>
                     <p>Entrega</p>
                     <span>{deliveryPrice}</span>
                  </div>

                  <div>
                     <strong>Total</strong>
                     <span>{totalOrderPriceWithDelivery}</span>
                  </div>
               </div>

               <Button />
            </OrderContainer>
         </form>
      </CheckoutContainer>
   )
}