import { CoffeeCardContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

import { Stepper } from "../../../../components/stepper";

interface TagProps {
   id: number
   name: string
}

interface CoffeeType {
   id: number
   name: string
   price: number
   image: string
   tags: TagProps[]
   description: string
}

interface CoffeeProps {
   coffee: CoffeeType
}

export function CoffeeCard({coffee}: CoffeeProps) {
   return (
      <CoffeeCardContainer>
         <img src={coffee.image} alt="" />

         <div className="tags">
            {coffee.tags.map(tag => {
               return (
                  <strong key={tag.id}>{tag.name}</strong>
               )
            })}
         </div>

         <h1>{coffee.name}</h1>
         <span>{coffee.description}</span>

         <div className="buy-section">
            <h1>{coffee.price.toFixed(2)}</h1>

            <div className="actions">
               <Stepper />

               <button>
                  <ShoppingCart size={22} weight="fill" />
               </button>
            </div>
         </div>
      </CoffeeCardContainer>
   )
}