import { Addtodo,Deletetodo } from '../slice/providerSlice'
import {v4 as uuid} from 'uuid'
import {useSelector,useDispatch} from 'react-redux'
import React, { useState } from 'react'


export function Counter() {

  const [search,setsearch]=useState('')

const todostate = useSelector(state=>state.Todo.todo)



  const dispatch=useDispatch()

  const Addtodohandle=()=>{
dispatch(Addtodo({
  id:uuid(),
  todos:search
})
)
setsearch(' ');
  }
 
  const Deletetodohandle=(id)=>{
    dispatch(Deletetodo({
      id:id,
    }))
  }


  return (
   <>
    <div className='items-center text-center'>
      <h1 className='text-xl mt-12 font-bold'>Todo App</h1>
      <label >
        <input className='rounded shadow py-2 px-4 mt' placeholder='Enter your task' value={search} onChange={(e)=>setsearch(e.target.value)} />
      <button className='bg-green-600 hover:bg-green-800 rounded py-2 px-4' onClick={Addtodohandle}>Add to task</button>
   
      </label><br/>
      
       {
        todostate.length>0 && todostate.map(state=>
            <label key={state.id}>
             
           <span className='font-serif text-xl mt-5'>{state.todos}</span>
           <button className='bg-green-600 m-5 hover:bg-green-800 rounded py-2 px-4' onClick={()=>Deletetodohandle(state.id)} >Delete</button>
            <br/></label>
      
        )
       }
       
        </div>
   </>
  )
}
