import { configureStore } from '@reduxjs/toolkit'
import providerSlice from '../slice/providerSlice'

export const store=configureStore({
    reducer:{
        Todo:providerSlice,
    },
})
