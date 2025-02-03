import { CheckoutContainer, FormContainer, OrderContainer } from "./styles";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { Input } from "./components/input";
import { Button } from "./components/button";
import { CoffeeCard } from "./components/coffee-card";
import { PaymentMethod } from "./components/payment-method";

import { useContext } from "react";
import { CoffeeCartContext } from "../../context/coffee-cart-context";

import * as z from "zod"

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";

const newDeliveryFormSchema = z.object({
   cep: z.string().min(8, 'Informe um CEP válido.'),
   street: z.string().min(1),
   number: z.number().min(1),
   neighborhood: z.string().min(1),
   city: z.string().min(1),
   uf: z.string().min(2),
   payment: z.enum(['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro']),
   complement: z.string().optional()
})

type NewDeliveryFormData = z.infer<typeof newDeliveryFormSchema>

export function Checkout() {
   const { coffeesOnCart, addNewOrderDelivery, cleanCartAfterCheckout } = useContext(CoffeeCartContext)

   const newDeliveryForm = useForm<NewDeliveryFormData>({
      resolver: zodResolver(newDeliveryFormSchema),
   })

   const { handleSubmit, register, reset } = newDeliveryForm

   function handleCreateNewDelivery(data: NewDeliveryFormData) {
      addNewOrderDelivery(data)
      reset()

      cleanCartAfterCheckout()
      navigate("/success")
   }

   const emptyOrder = coffeesOnCart.length <= 0
      
   const navigate = useNavigate()

   const deliveryPrice = (3.5).toFixed(2)

   const totalOrderPrice = coffeesOnCart.reduce((total, coffee) => total + coffee.quantity * coffee.price, 0).toFixed(2)

   const totalOrderPriceWithDelivery = (Number(totalOrderPrice) + Number(deliveryPrice)).toFixed(2)

   return (
      <CheckoutContainer>
         <form onSubmit={handleSubmit(handleCreateNewDelivery)} >

            <h1>Complete seu pedido</h1>

            <h1>Cafés selecionados</h1>

            <FormProvider {...newDeliveryForm}>
               <FormContainer className="deliveryInfo">
                  <header>
                     <MapPinLine size={22} className="pinIcon" />
                     <div className="deliveryHeaderInfo">
                        <span>Endereço de Entrega</span>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                     </div>
                  </header>

                  <div className="deliveryInputs">
                     <Input type="text" placeholder="CEP" {...register("cep")} />
                     <Input type="text" placeholder="Rua" {...register("street")} />

                     <div>
                        <Input type="number" placeholder="Número" {...register("number", {valueAsNumber: true})} />
                        <Input type="text" placeholder="Complemento" isOptional {...register("complement")} />
                     </div>

                     <div>
                        <Input type="text" placeholder="Bairro" {...register("neighborhood")} />
                        <Input type="text" placeholder="Cidade" {...register("city")} />
                        <Input type="text" placeholder="UF" {...register("uf")} />
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
                     <PaymentMethod icon={<CreditCard />} method="cartão de crédito" value="Cartão de Crédito" />
                     <PaymentMethod icon={<Bank />} method="cartão de débito" value="Cartão de Débito" />
                     <PaymentMethod icon={<Money />} method="dinheiro" value="Dinheiro" />
                  </div>
               </FormContainer>
            </FormProvider>
            
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

               <Button type="submit" disabled={emptyOrder} />
            </OrderContainer>
         </form>
      </CheckoutContainer>
   )
}