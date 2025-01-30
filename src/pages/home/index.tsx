import { CoffeeList, IntroContainer, IntroTitle, ItemsContainer } from "./styles";

import coffeePic from "../../assets/coffee-pic.png"

import { CoffeeCard } from "./components/coffee-card";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

const coffeeTypesList = [
   {
      id: 1,
      tags: ['tradicional', 'quente'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.90,
      img: 'src/assets/Type=Expresso.png'
   },

   {
      id: 2,
      tags: ['tradicional', 'quente'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.90,
      img: 'src/assets/Type=Americano.png'
   },

   {
      id: 3,
      tags: ['tradicional', 'quente'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.90,
      img: 'src/assets/Type=Expresso Cremoso.png'
   },

   {
      id: 4,
      tags: ['tradicional', 'gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.90,
      img: 'src/assets/Type=Café Gelado.png'
   },

   {
      id: 5,
      tags: ['tradicional', 'com leite', 'quente'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.90,
      img: 'src/assets/Type=Café com Leite.png'
   },

   {
      id: 6,
      tags: ['tradicional', 'com leite', 'quente'],
      name: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.90,
      img: 'src/assets/Type=Latte.png'
   },

   {
      id: 7,
      tags: ['tradicional', 'com leite', 'quente'],
      name: 'Capuccino',
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.90,
      img: 'src/assets/Type=Capuccino.png'
   },

   {
      id: 8,
      tags: ['tradicional', 'com leite', 'quente'],
      name: 'Macchiato',
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.90,
      img: 'src/assets/Type=Macchiato.png'
   },

   {
      id: 9,
      tags: ['tradicional', 'com leite', 'quente'],
      name: 'Mochaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.90,
      img: 'src/assets/Type=Mochaccino.png'
   },

   {
      id: 10,
      tags: ['especial', 'com leite', 'quente'],
      name: 'Chocolate Quente',
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.90,
      img: 'src/assets/Type=Chocolate Quente.png'
   },

   {
      id: 11,
      tags: ['especial', 'alcoólico', 'gelado'],
      name: 'Cubano',
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.90,
      img: 'src/assets/Type=Cubano.png'
   },

   {
      id: 12,
      tags: ['especial', 'quente'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.90,
      img: 'src/assets/Type=Havaiano.png'
   },

   {
      id: 13,
      tags: ['especial', 'quente'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.90,
      img: 'src/assets/Type=Árabe.png'
   },

   {
      id: 14,
      tags: ['especial', 'alcoólico', 'quente'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.90,
      img: 'src/assets/Type=Irlandês.png'
   },
]

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
               {coffeeTypesList.map(coffee => {
                  return (
                     <CoffeeCard
                        key={coffee.id}
                        name={coffee.name}
                        description={coffee.description}
                        price={coffee.price}
                        id={coffee.id}
                        tags={coffee.tags}
                        image={coffee.img}
                     />
                  )
               })}
            </div>
         </CoffeeList>
      </div>
   )
}