import { CoffeeCardContainer } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

interface CoffeeProps {
   id: number
   name: string
   price: number
   image: string
   tags: string[]
   description: string
}

export function CoffeeCard(props: CoffeeProps) {
   return (
      <CoffeeCardContainer>
         <img src={props.image} alt="" />

         <div className="tags">
            {props.tags.map(tag => {
               return (
                  <strong>{tag}</strong>
               )
            })}
         </div>

         <h1>{props.name}</h1>
         <span>{props.description}</span>

         <div className="buy-section">
            <h1>{props.price.toFixed(2)}</h1>

            <div className="actions">
               <div>
                  <Minus size={14} weight="bold" />
                  0
                  <Plus size={14} weight="bold" />
               </div>

               <button>
                  <ShoppingCart size={22} weight="fill" />
               </button>
            </div>
         </div>
      </CoffeeCardContainer>
   )
}