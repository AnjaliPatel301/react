import { useState,useCallback,useEffect, useRef } from 'react'
import './App.css'
//import toast from 'react-hot-toast';
import toast, { Toaster } from 'react-hot-toast';

function App() {
 const [lenght,setLenght]=useState(8)
 const [number,setNumber]=useState(false)
 const [characters,setCharacters]=useState(false)
 const [password,setPassword]=useState(" ")

 const passwordGenerator=useCallback
(
  ()=>{
    let str="ABCDEDGHIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz"
    let pass=" "

    if(number) str+="0123456789"

    if(characters) str+="!~`@#$%^&*()_-=+{}"
    

    for(let i=1;i<=lenght;i++){
      let char=Math.floor(Math.random() * str.length+1)
     // let char = Math.floor(Math.random() * str.length)

      pass+=str.charAt(char)
    }
    setPassword(pass)
  }
,[lenght,number,characters,setPassword]
)

useEffect(()=>{
  passwordGenerator()
},
[lenght,number,characters,passwordGenerator])


const passref=useRef(null)

const copyPasswordToClipboard = useCallback(()=>{

  // passref.current?.select()
  // passref.current?.setSelectionRange(0,9)

  if (password) {
      passref.current?.select()
  passref.current?.setSelectionRange(0,2)
   window.navigator.clipboard.writeText(password)
      .then(() => {
        toast.success("Password copied 🔑!");
      })
      .catch((err) => {
        toast.error("Failed to copy: ", err);
      });
  }
},
[password])



  return (
    <>
      <h1 className='text-center text-3xl font-bold mt-20 '> Password Generator😜</h1>
      <div className='bg-slate-400 m-auto max-w-screen-sm my-5 rounded-lg py-3   font-bold  shadow-purple-600'>
        <input type="text"placeholder='pass..'
        value={password}
        readOnly
         className='outline-none  w-full rounded py-2 ps-4 pr-5 max-w-lg' />
        <br></br>
       

       <div className='mt-5 '>
         <input type="range" 
        min={6}
        max={100}
        className='bg-purple-600 text-white font-bold cursor-pointer'
          value={lenght}
        onChange={(e)=>{setLenght(e.target.value)}}

        />

        <label htmlFor="length" 
        className='ms-2'
        >lenght:{lenght}</label>


        <input type="checkbox" 
        className='cursor-pointer ms-3'
        defaultChecked={number}
        onChange={()=>{
          setNumber((prev)=>!prev)
        }}
        />
        <label htmlFor="checkbox"
        >:Number</label>


        
        <input type="checkbox" 
        className='cursor-pointer ms-3'
        defaultChecked={characters}
        onChange={()=>{
          setCharacters((prev)=>!prev)
        }}
        />
        <label htmlFor="checkbox"
        >:
        Characters</label>
       </div>

<button className='bg-purple-800 text-white rounded mt-4 py-2 
px-6' 
onClick={copyPasswordToClipboard}
>Copy📑</button>
 <Toaster />
      </div>
    </>
  )
}

export default App
