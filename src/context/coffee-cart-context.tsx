import { createContext, ReactNode, useEffect, useState } from "react";

export interface CoffeeOnCartProps {
   id: number
   img: string
   name: string
   price: number
   quantity: number
}

interface TagProps {
   id: number
   name: string
}

export interface CoffeeType {
   id: number
   name: string
   price: number
   image: string
   tags: TagProps[]
   description: string
   quantity: number
}

interface CoffeeCartContextType {
   coffeesOnCart: CoffeeOnCartProps[]
   addCoffeeToCart: (coffee: CoffeeType) => void
   updateCoffeeQuantity: (id: number, quantity: number) => void
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType)

interface CoffeeCartContextProviderProps {
   children: ReactNode
}

export function CoffeeCartContextProvider({ children }: CoffeeCartContextProviderProps) {
   const [coffeesOnCart, setCoffeesOnCart] = useState<CoffeeOnCartProps[]>([])

   function addCoffeeToCart(coffee: CoffeeType) {
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

   function updateCoffeeQuantity(id: number, quantity: number) {
      setCoffeesOnCart(prevState =>
         prevState.map(coffee => coffee.id === id ? {...coffee, quantity} : coffee)
      )
   }

   useEffect(() => {
      console.log(coffeesOnCart)
   }, [coffeesOnCart])

   return (
      <CoffeeCartContext.Provider
         value={{
            coffeesOnCart,
            addCoffeeToCart,
            updateCoffeeQuantity
         }}
      >
         {children}
      </CoffeeCartContext.Provider>
   )
}