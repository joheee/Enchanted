import { createContext } from "react";

const defaultState = {
    Search:'',
    Filter:[],
    IsCartModal:false,
    Cart:[],
    CartTotal:0
}

export const FeatureContext = createContext(defaultState)