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

interface DeliveryType {
   cep: string
   street: string
   number: number
   complement?: string
   neighborhood: string
   city: string
   uf: string
   payment: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

interface CoffeeCartContextType {
   coffeesOnCart: CoffeeOnCartProps[]
   deliveryData: DeliveryType

   cleanCartAfterCheckout: () => void

   addCoffeeToCart: (coffee: CoffeeType) => void
   addNewOrderDelivery: (order: DeliveryType) => void

   deleteCoffeeFromCart:(id: number) => void
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

   function deleteCoffeeFromCart(id: number){
      const coffeesWithoutDeletedOne = coffeesOnCart.filter(
         (coffee) => coffee.id !== id
      )

      setCoffeesOnCart(coffeesWithoutDeletedOne)
   }

   const [deliveryData, setDeliveryData] = useState<DeliveryType>({
      cep: "",
      city: "",
      neighborhood: "",
      number: 0,
      payment: "Dinheiro",
      street: "",
      uf: ""
   })

   function addNewOrderDelivery(order: DeliveryType) {
      const newDeliveryData = {
         cep: order.cep,
         street: order.street,
         number: order.number,
         complement: order.complement,
         neighborhood: order.neighborhood,
         city: order.city,
         uf: order.uf,
         payment: order.payment
      }

      setDeliveryData(newDeliveryData)
   }

   function cleanCartAfterCheckout() {
      setCoffeesOnCart([])
   }

   useEffect(() => {
   }, [coffeesOnCart, deliveryData])

   return (
      <CoffeeCartContext.Provider
         value={{
            deliveryData,
            coffeesOnCart,
            addCoffeeToCart,
            addNewOrderDelivery,
            deleteCoffeeFromCart,
            updateCoffeeQuantity,
            cleanCartAfterCheckout
         }}
      >
         {children}
      </CoffeeCartContext.Provider>
   )
}