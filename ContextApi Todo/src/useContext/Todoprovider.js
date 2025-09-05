import React, {  createContext, useContext } from 'react'

const Todoprovider=createContext({
    todos:[
        {
        id:3,
        todo:"add book",
        compelete:false,
    }
    ],
    addtodo:(todo)=>{},
    updatatodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    togelCheck:(id)=>{}
})
export const TodoProvider= Todoprovider.Provider;

export const useTodoprovider=()=>{
    return useContext(Todoprovider)
}


