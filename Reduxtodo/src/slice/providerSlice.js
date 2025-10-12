import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo: [],
}

export const counterSlice = createSlice({
  name:'todos',
  initialState,
  reducers:{
   Addtodo:(state,action)=>{
    state.todo.push(action.payload);
   },
   Deletetodo:(state,action)=>{
    state.todo=state.todo.filter(state=>state.id!=action.payload.id)
     }
  },
})

export const {Addtodo,Deletetodo  } = counterSlice.actions

export default counterSlice.reducer
