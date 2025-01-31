import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

import { GlobalStyles } from "./styles/global"

import { Router } from "./router"
import { BrowserRouter } from "react-router-dom"
import { CoffeeCartContextProvider } from "./context/coffee-cart-context"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeCartContextProvider>
          <Router />
        </CoffeeCartContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}