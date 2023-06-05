import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { CartModal } from "./modal/CartModal";
import { FeatureContext } from "./variable/Context";
import { Toaster } from "react-hot-toast";

export default function App() {
  
  const [Search, SetSearch] = useState('')
  const [Filter, SetFilter] = useState([])
  const [Cart, SetCart] = useState([])
  const [Refresh, SetRefresh] = useState(false)
  const [IsCartModal, SetIsCartModal] = useState(false)
  const [CartTotal, SetCartTotal] = useState(0)

  const val = {
    Search, SetSearch,
    Filter, SetFilter,
    Refresh, SetRefresh,
    IsCartModal, SetIsCartModal,
    Cart, SetCart,
    CartTotal, SetCartTotal
  }

  // REFRESH PURPOSE
  useEffect(() => {},[Refresh])

  return (
    <FeatureContext.Provider value={val}>
      <Dashboard/>
      <CartModal/>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </FeatureContext.Provider>
  )
}