import { CoffeeCardContainer } from "./styles";

import { Stepper } from "../../../../components/stepper";

import { Trash } from "phosphor-react";

import { CoffeeCartContext, CoffeeOnCartProps } from "../../../../context/coffee-cart-context";
import { useContext } from "react";

interface CoffeeCardOnOrder {
   coffee: CoffeeOnCartProps
}

export function CoffeeCard({ coffee }: CoffeeCardOnOrder) {
   const { deleteCoffeeFromCart, updateCoffeeQuantity } = useContext(CoffeeCartContext)
   
   function handleQuantityChange(newQuantity: number) {
      updateCoffeeQuantity(coffee.id, newQuantity)
   }

   function handleRemoveCoffeeFromCart(){
      deleteCoffeeFromCart(coffee.id)
   }

   const totalCoffeePrice = (coffee.price * coffee.quantity).toFixed(2)

   return (
      <CoffeeCardContainer>
         <div className="coffeInfo">
            <img src={coffee.img} alt="" />

            <div className="details">
               <span>{coffee.name}</span>

               <div className="actions">
                  <Stepper
                  itemId={coffee.id}
                  initialValue={coffee.quantity}
                  onChange={handleQuantityChange}
                  />

                  <button type="button" onClick={handleRemoveCoffeeFromCart}>
                     <Trash size={16} />
                     Remover
                  </button>
               </div>
            </div>
         </div>

         <strong>{totalCoffeePrice}</strong>
      </CoffeeCardContainer>
   )
}