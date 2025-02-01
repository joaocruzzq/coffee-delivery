import { CoffeeCardContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

import { Stepper } from "../../../../components/stepper";

import { useContext, useState } from "react";

import { CoffeeCartContext, CoffeeType } from "../../../../context/coffee-cart-context";

interface CoffeeProps {
   coffee: CoffeeType
}

export function CoffeeCard({coffee}: CoffeeProps) {
   const { addCoffeeToCart } = useContext(CoffeeCartContext)

   const [itemQuantity, setItemQuantity] = useState(1)

   function handleAddCoffeeToCart() {
      addCoffeeToCart({...coffee, quantity: itemQuantity})
   }

   function handleQuantityChange(newQuantity: number) {
      setItemQuantity(newQuantity)
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
               itemId={coffee.id}
               initialValue={itemQuantity}
               onChange={handleQuantityChange}
               />

               <button onClick={handleAddCoffeeToCart} >
                  <ShoppingCart size={22} weight="fill" />
               </button>
            </div>
         </div>
      </CoffeeCardContainer>
   )
}