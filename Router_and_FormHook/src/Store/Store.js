import { configureStore } from "@reduxjs/toolkit";
import { userreducer } from "../Feature/user_info";
export const store=configureStore({
    reducer:userreducer
})

