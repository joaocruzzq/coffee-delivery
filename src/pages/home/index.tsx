import { CoffeeList, IntroContainer, IntroTitle, ItemsContainer } from "./styles";

import coffeePic from "../../assets/coffee-pic.png"

import { CoffeeCard, CoffeeType } from "./components/coffee-card";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { coffeeTypesList } from "../../utils/coffeeList";

import { useState } from "react";

interface CoffeeOnCartProps {
   id: number
   img: string
   name: string
   price: number
   quantity: number
}

export function Home() {
   const [coffeesOnCart, setCoffeesOnCart] = useState<CoffeeOnCartProps[]>([])

   function handleAddCoffeeToCart(coffee: CoffeeType) {
      const coffeeToAdd = {
         id: coffee.id,
         img: coffee.image,
         name: coffee.name,
         price: coffee.price,
         quantity: coffee.quantity
      }

      const coffeeOnCartAlready = coffeesOnCart.find((coffee) => coffee.id === coffeeToAdd.id)

      if(coffeeOnCartAlready) {
         const updatedCartList = coffeesOnCart.map((coffee) => coffee.id === coffeeToAdd.id ? {
            ...coffee, quantity: coffee.quantity + coffeeToAdd.quantity
         } : coffee )

         setCoffeesOnCart(updatedCartList)
      }

      else {
         setCoffeesOnCart((prevState) => [...prevState, coffeeToAdd])
      }
   }

   console.log(coffeesOnCart)

   return (
      <div>
         <IntroContainer>
            <IntroTitle>
               <h1>Encontre o café perfeito para qualquer hora do dia</h1>
               <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </IntroTitle>

            <img src={coffeePic} alt="" />

            <ItemsContainer>
               <div>
                  <ShoppingCart size={32} weight="fill" />
                  Compra simples e segura
               </div>

               <div>
                  <Package size={32} weight="fill" />
                  Embalagem mantém o café intacto
               </div>

               <div>
                  <Timer size={32} weight="fill" />
                  Entrega rápida e rastreada
               </div>

               <div>
                  <Coffee size={32} weight="fill" />
                  O café chega fresquinho até você
               </div>
            </ItemsContainer>
         </IntroContainer>

         <CoffeeList>
            <h1>Nossos cafés</h1>

            <div>
               {coffeeTypesList.map(coffee => {
                  return (
                     <CoffeeCard
                        key={coffee.id}
                        coffee={coffee}
                        onAddCoffeeToCart={handleAddCoffeeToCart}
                     />
                  )
               })}
            </div>
         </CoffeeList>
      </div>
   )
}