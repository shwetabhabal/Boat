import { configureStore } from "@reduxjs/toolkit";
import CartSystem from "./Todoslice"
const store=configureStore({

    reducer:{
        mycart:CartSystem
    }

})

export default store