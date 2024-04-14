import {configureStore} from "@reduxjs/toolkit"
import valueReducer  from "./valuesSlice"

export const store = configureStore({
    reducer:{
       values:valueReducer
    }
})