import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Success } from "./pages/success";
import { Checkout } from "./pages/checkout";
import { DefaultLayout } from "./layout/defaultLayout";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<DefaultLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/checkout" element={<Checkout />} />
         </Route>
      </Routes>
   )
}