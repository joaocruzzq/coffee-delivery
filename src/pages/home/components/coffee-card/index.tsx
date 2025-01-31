import { CoffeeCardContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

import { Stepper } from "../../../../components/stepper";

import { useContext, useState } from "react";

import { CoffeeCartContext, CoffeeType } from "../../../../context/coffee-cart-context";

interface CoffeeProps {
   coffee: CoffeeType
}

export function CoffeeCard({coffee}: CoffeeProps) {
   const [itemQuantity, setItemQuantity] = useState(1)

   const { addCoffeeToCart } = useContext(CoffeeCartContext)
   

   function handleAddCoffeeToCart(coffeeToAddData: CoffeeType) {
      addCoffeeToCart(coffeeToAddData)
   }

   function handleIncreaseItemQuantity() {
      setItemQuantity(itemQuantity + 1)
   }

   function handleDecreaseItemQuantity() {
      if(itemQuantity > 0) {
         setItemQuantity(itemQuantity - 1)
      }
   }

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
               <Stepper
                  itemQuantity={itemQuantity}
                  onDecreaseItemQuantity={handleDecreaseItemQuantity}
                  onIncreaseItemQuantity={handleIncreaseItemQuantity}
               />

               <button onClick={() => handleAddCoffeeToCart({...coffee, quantity: itemQuantity})} >
                  <ShoppingCart size={22} weight="fill" />
               </button>
            </div>
         </div>
      </CoffeeCardContainer>
   )
}