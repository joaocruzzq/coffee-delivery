import { CoffeeList, IntroContainer, IntroTitle, ItemsContainer } from "./styles";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import coffeePic from "../../assets/coffee-pic.png"
import { CoffeeCard } from "./components/coffee-card";

export function Home(){
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
               <CoffeeCard />
               <CoffeeCard />
               <CoffeeCard />
               <CoffeeCard />
               <CoffeeCard />
            </div>
         </CoffeeList>
      </div>
   )
}