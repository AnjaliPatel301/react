// import React from 'react'
// import { CiSearch } from "react-icons/ci";
// import { FaMicrophone } from "react-icons/fa6";
// import { FaSquare } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";

// const App = () => {
//   return (
//     <div className='h-screen'>
//       <header>
//         <nav className='flex justify-between px-5 items-center '>
//           <div>
//             <ul className='flex gap-6 items-center [&>*]:flex ' >
//               <li><a href="#" className=' hover:text-gray-950'>Home</a></li>
//               <li><a href="#" className=' hover:text-gray-950'>Store</a></li>
//             </ul>
//           </div>
//           <div>
//             <ul className='flex items-center gap-6  [&>*]:flex'>
//               <li><a href="#">Gmail</a></li>
//               <li><a href="#">Image</a></li>
//               <li><CgProfile /></li>
//               <li><CgProfile /></li>
//               <li><CgProfile /></li>
//             </ul>
//           </div>
//         </nav>
//       </header>

//       <div className='text-center flex justify-center items-center'>
//         <img className='max-w-80'  src="https://pngimg.com/uploads/google/google_PNG102344.png" alt="" />
//       </div>
//       <div>
// <div>
// <CiSearch />
//   <input type="text" />
//  < FaMicrophone />
// <FaSquare />

// </div>
//       </div>
//        <div>
//         <button>Google Search</button>
//         <button>i'm Feeling Lucky</button>
//        </div>
//   </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <>

// <header className=' w-full text-white flex justify-between items-center px-10 fixed'>
//  <a href="#" className='py-2'>
//   <img className='w-16 h-16' src="https://png.pngtree.com/png-clipart/20220616/original/pngtree-white-shoes-png-image_8080511.png" alt="" />
//   <p className='text-xs'>The shoe Company</p>
//  </a>
//  <nav className='hidden md:block lg:space-x-8 space-x-6 font-bold lg:text-2xl '>
//    <a href="#">Home</a>
//   <a href="#home">How it,s work</a>
//   <a href="#about">about</a>
//   <a href="#testimonials">Testimonials</a>
//   <a href="#contect us">Contect Us</a>
//  </nav>

//  <button className=" md:hidden text-3xl">☰</button>
// </header>

// <section className='bg-contain bg-no-repeat bg-right  ' style={{backgroundImage:`url("https://static.vecteezy.com/system/resources/previews/020/328/693/original/3d-white-particle-wave-pattern-on-a-black-background-digital-abstract-background-can-be-applied-for-web-design-website-wallpaper-banner-or-cover-illustration-vector.jpg")`}}>
// <div className="hero flex text-white pt-14 ">

//   <div className=' max-w-3xl mx-auto flex items-center '>
//     <p className='text-8xl font-black leading-[92px]'>THE<br/> SHOE <br/>COMPANY</p>
//   </div>
//   <div className=''>
//  <img className='w-[670px]' src="https://www.iconarchive.com/download/i138022/microsoft/fluentui-emoji-3d/Running-Shoe-3d.1024.png" alt="" />
//   </div>
// </div>
// </section>
//    </>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//   <>
//   <div className='p-5 bg-white shadow-lg w-full'>
//   <navbar className="md:flex flex justify-between md:justify-between cursor-pointer  bg-white text-black   items-center">
//     <div className='flex items-center'>
//       <img className='h-10 p-2 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042" alt="" />
// <a href="#" className='font-bold text-xl'>Tailwind</a>
//     </div>
//     <nav className='md:flex hidden md:border-e-black lg:space-x-8 space-x-4  text-black md:items-center cursor-pointer text-lg lg:text-xl  '>

//       <a className='hover:text-cyan-400 duration-500 ' href="#">Home</a>
//       <a className='hover:text-cyan-400 duration-500 ' href="#about">About</a>
//       <a className='hover:text-cyan-400 duration-500 ' href="#Services">Services</a>
//       <a className='hover:text-cyan-400 duration-500 ' href="#contect">Contect</a>

//     </nav>

// <button className='bg-cyan-400 hidden md:block text-white hover:bg-cyan-500 duration-500 hover:scale-95  px-6 py-2 rounded'>Add to card</button>

// <button className='md:hidden text-3xl'>☰</button>
//   </navbar>
//   </div>

//  {/* <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 '>
//   <div className=' shadow-lg bg-red-600 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-yellow-600 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-blue-600 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-slate-600  min-h-[100px] '></div>
//   <div className=' shadow-lg bg-pink-600 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-green-600 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-stone-50  min-h-[100px] '></div>
//   <div className=' shadow-lg bg-lime-400 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-teal-300 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-cyan-900 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-violet-600 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-rose-910 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-emerald-400 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-red-600 min-h-[100px] '></div>
//     <div className=' shadow-lg bg-pink-600 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-green-600 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-stone-50  min-h-[100px] '></div>
//   <div className=' shadow-lg bg-lime-400 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-teal-300 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-cyan-900 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-violet-600 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-rose-910 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-emerald-400 min-h-[100px] '></div>
//   <div className=' shadow-lg bg-red-600 min-h-[100px] '></div>


//  </div> */}

//  <form action="" className=' bg-gradient-to-t from-stone-50 to-cyan-200 grid gap-4  py-8  grid-cols-1 mx-auto  items-center text-center shadow-lg  w-96 mt-20 rounded-lg font-serif '>
// <h1 className='text-3xl my-3'>
//   Login Page
// </h1>
// <label htmlFor="" className='text-lg'>Username:<input type="text" name="" className='px-4 py-1 rounded-full ms-2' id="" /></label>
// <label htmlFor="" className='text-lg'>Password:<input type='password' name="" id=""  className='px-4 py-1 rounded-full ms-2' /></label>
// <button className='bg-cyan-400 mx-auto mt-4 text-white hover:bg-cyan-500 duration-500 hover:scale-95  px-8 py-2 rounded'>
//   Submit
// </button>

// </form>
//   </>
//   )
// }

// export default App



// import React from 'react'
// import { IoSearchOutline } from "react-icons/io5";

// const App = () => {
//   return (
//     <>

//     <div className='grid grid-cols-2 size-[100%] gap-10 m-5 font-[poppins] '>
//       <div className='bg-gray-300 p-30'>
//         <div className='absolute top-12 left-14 bg-white p-2 text-xl  rounded-full '><IoSearchOutline />
//        </div>
//          <img className=''  src="https://static.vecteezy.com/system/resources/previews/025/140/283/non_2x/pink-t-shirt-mockup-on-transparent-background-ai-generated-free-png.png" alt="" />
//       </div>

//       <div className='mx-auto'>
//         <p className='text-xs text-gray-400'>MY STORE</p>
//         <h1 className='text-6xl leading-[70px] mt-3'>BANANA BLISS <br/>OVERSIZED T-SHIRT</h1>

//         <p className='text-lg mt-5 tracking-wider '>Rs. 1,178.82</p>
//         <p className='text-sm mt-2 text-gray-400 '>Taxes in cluded <span className='underline decoration-black underline-offset-4 '>Shipping</span> calculated at checkout</p>
//         <p className='text-gray-400 mt-8 '>Size </p>
//         <div  className='flex space-x-3 mt-3'>
//           <div className='rounded-3xl border border-black py-1 px-6'>S</div>
//           <div className='rounded-3xl border bg-black text-white border-black py-1 px-6' >M</div>
//           <div className='rounded-3xl border border-black py-1 px-6'>L</div>
//           <div className='rounded-3xl border border-black py-1 px-6'>XL</div>
//           <div className='rounded-3xl border border-black py-1 px-6'>XXL</div>
//         </div>
//         <p className='mt-6  text-lg text-gray-400'>Quantity</p>
//         <div className='w-52 text-xl py-2 px-4 mt-2 border border-black flex justify-between'>
// <p>-</p>
// <p>1</p>
// <p>+</p>
//         </div>

//         <button className='text-black w-full border border-black border-spacing-2 py-3 mt-5'>Add to cart</button><br/>
//         <button className='bg-black text-white w-full border border-black border-spacing-2 py-3 mt-2'>Buy it now</button>
//       </div>
//        <div className='bg-gray-300'>
//         <div className='absolute top-12 left-14 bg-white p-2 text-xl  rounded-full '><IoSearchOutline />
//        </div>
//          <img className=''  src="https://static.vecteezy.com/system/resources/previews/025/140/283/non_2x/pink-t-shirt-mockup-on-transparent-background-ai-generated-free-png.png" alt="" />
//       </div>
//     </div>
   
//     </>
//   )
// }

// export default App









// import React, { useState } from 'react'

// const App = () => {
// const handleSubmit=(e)=>{
//   e.preventDefault()

// }

//   return (

//     <>
    
    
//     </>
//   )
// }

// export default App



// import React from 'react'
// import {increment,Decrement,reset} from './Feature/counterSlice'
// import { useDispatch, useSelector } from 'react-redux'

// const App = () => {

// const count=useSelector((state)=>state.counter.value)

// const dispatch=useDispatch()


// function handleIncrement(){
//   dispatch(increment())

// }

// function handleDecrement(){
//   dispatch(Decrement())

// }
// function handleReset(){
//   dispatch(reset())

// }

//   return (
//     <>
// <div className='items-center border-black '>
//       <h1 className='text-xl m-2'>Count:{count}</h1>
//   <button onClick={handleIncrement} className='border border-black rounded-sm px-4 py-2 m-4'>+</button><br/>
//   <button onClick={handleDecrement} className='border border-black rounded-sm px-4 py-2 m-4'>-</button><br/>
//   <button onClick={handleReset} className='border border-black rounded-sm px-4 py-2 m-4'>reset</button>
// </div>

//     </>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   const allBrand=[
//   {id:1,brandName:"puma"},
//   {id:2,brandName:"jio"},
//   {id:3,brandName:"nike"},
//    {id:4,brandName:"apple"},
//   {id:5,brandName:"reebok"},
//   {id:6,brandName:"leneo"},
// ]

// const [todoitem,settodoitem] =useState(allBrand)

// const [brandValueadd,setbrandValueadd]=useState([])

// const Addtocard=(id)=>{
//  const addcard=allBrand.find(item=>item.id===id)
//  setbrandValueadd([...brandValueadd,addcard])
// }

// const Deleteitem=(id)=>{
//   const RemoveValue=brandValueadd.filter(item=>item.id!==id)
//   setbrandValueadd(RemoveValue)
// }
//   return (
//     <>
//     <p>Add the Card</p>
//     {
//       allBrand.map(item=>
//        <div>
//          <p>{item.brandName}</p>
//         <button onClick={()=>Addtocard(item.id)} className='bg-black text-white m-3 p-1  '>Add to Card📑</button>
//        </div>
//       )
//     }

//     <p>Delete to Card</p>
//     {
//       brandValueadd && brandValueadd.map(item=>
//        <div>
//          <p>{item.brandName}</p>
//         <button onClick={()=>Deleteitem(item.id)} className='bg-black text-white m-3 p-1  '>Remove Card ❌</button>
     
//        </div>
//       )
//     }
//     </>
//   )
// }

// export default App








// import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';

// const App = () => {

//   const [Search,setsearch]=useState()
// const [todolist,settodolist]=useState([ ])
// const handleValue=(e)=>{
//   setsearch(e.target.value)
// }

// const onAddvalue=()=>{
//   settodolist([...todolist,{id:uuidv4(),todo:Search,isCompelete:false}])
//   setsearch(" ")
// }

// const deleteFilter=(id)=>{
//   const filterDelete= todolist.filter(index=>index.id !== id)
// settodolist(filterDelete)
// }

// const checkboxContro=(id)=>{
// const checkValue=todolist.map(index=>index.id===id ? {...index ,isCompelete : ! index.isCompelete}:index)
// settodolist(checkValue)

// }

//   return (
//     <>
//     <div className='mx-auto w-96 items-center justify-center p-6 mt-10 shadow border border-black rounded '>
//       <p className='text-center font-bold mb-2 text-xl'>To-Do List📑</p>
//      <div>
//        <input type="text" value={Search} onChange={handleValue} className='border border-black p-1 rounded m-1'/>
//        <button onClick={onAddvalue} className='border border-green-500 bg-green-400 text-white p-1 m-1 rounded ms-3'>Add to Card📑</button>
//      </div>
     
     
//      <div>
//       {
//         todolist && todolist.length > 0 && todolist.map(item=>(
//            <label key={item.id} >
//         <input type="checkbox"  name="" id="" onClick={()=>checkboxContro(item.id)} /> 
//         <span className={item.isCompelete ? "line-through": ''}>{item.todo}</span>
//         <button onClick={()=>deleteFilter(item.id)} className='border border-green-500 bg-green-400 text-white p-1 m-1 rounded ms-3'>Remove to Card❌</button><br/>
//       </label>
//         ))
//       }
//      </div>

//     </div>
//     </>
//   )
// }

// export default App

// import React, { useRef, useState } from 'react'

// const App = () => {
// const [count,setcount]=useState(0)
// const ref=useRef('anj')


// const starttimer=()=>{
//  ref.current= setInterval(()=>
//  {
//   setcount(count=>count+1)
//  }
//  )
// ,100}

// const stoptimer=()=>{
//   clearInterval(ref.current)
// }
//   return (
//   <>
//   <p className='m-5 text-2xl font-bold '>{count}</p>
//   <button onClick={starttimer} className='bg-pink-400 p-1 m-2'>Start</button>
//   <button onClick={stoptimer} className='bg-pink-400 p-1 m-2'>stop</button>
//   </>
//   )
// }

// export default App

// import React, { useRef } from 'react'

// const App = () => {
//   const refVal=useRef(null)
// const  onfocusEvent=()=>{
//   refVal.current.focus()

// }
//   return (
//    <>
  
//    <input className='p-2 border m-2' ref={refVal} />
//    <button onClick={onfocusEvent} className='bg-pink-400 p-1 m-2'>Focus me😒</button>
//    </>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [count,setcount]=useState(1)
//   const [products,setproducts]=useState([ ])
 
//   const  getData=async(URL)=>{
//         try {
//           const {data:{products}}= await axios.get(URL)
//           console.log(products)  
//           setproducts(products)   
//     }
//      catch (error) {
//       return error
//     }

//   }


//   useEffect(()=>{
//     const URL=`https://jsonexamples.com/products`
//     getData(URL)
// },[])

//   return (
//     <> 
//     <p>Count:{count}</p>
//      <button onClick={()=>setcount(count+1)} className='rounded bg-pink-400 p-1 m-2'>Focus me😒</button>

//      {
//       products && products.length >0 && products.map(product=>
//         <div>
//           <p key={product.id}>{product.title}</p>
//           <img src={`${product.images}`} alt="" />
//         </div>
//       )
//      }
//     </>
//   )
// }

// export default App


// import React, { useRef,useState } from 'react'
// import { MdMenu } from "react-icons/md";
// import { IoLogoElectron } from "react-icons/io5";
// import { FaArrowRight } from "react-icons/fa6";
// import { IoCloseSharp } from "react-icons/io5";

// const App = () => {
//  const [open, setOpen] = useState(false);

//   return (
//     <>
//     <nav className='flex justify-between px-4 shadow'>
//       <div className='w-[150px] cursor-pointer'>
//         <img src="https://bookface-images.s3.amazonaws.com/logos/35f9c42f136f9510991c0fae39612fcb89cbd7ef.png" alt="" />
//       </div>
//       <div className=' md:items-center hidden md:flex space-x-9  '>
//      <a href="#" className='cursor-pointer hover:text-blue-500'>Prinicing</a>
//      <a href="#" className='cursor-pointer hover:text-blue-500'>Doc</a>
//      <a href="#" className='cursor-pointer hover:text-blue-500'>Changelog</a>
//      <a href="#" className='cursor-pointer hover:text-blue-500'>Blog</a>
//      <a href="#" className='cursor-pointer hover:text-blue-500'>Login</a>
//       </div>
//       <button className=' hidden gap-2 items-center md:flex '>
//         <div className='gap-2 py-2 px-4 rounded border items-center md:flex hover:border-green-600 hover:animate-pulse '>
//         <IoLogoElectron className='text-xl hover:animate-spin' />Electron Developer<FaArrowRight /></div></button>

//     <button onClick={()=>setOpen(!open)} className='md:hidden text-3xl cursor-pointer'>{open ? <IoCloseSharp/>:<MdMenu/>}</button>

// <div className='fixed inset-0  '>

// <div className='flex justify-between px-4 shadow'>
//     <div className='w-[150px] cursor-pointer'>
//         <img src="https://bookface-images.s3.amazonaws.com/logos/35f9c42f136f9510991c0fae39612fcb89cbd7ef.png" alt="" />
//       </div>
//        <button  className='md:hidden text-3xl cursor-pointer'><IoCloseSharp /></button>

// </div>
// </div>


//     </nav>

//     </>
//   )
// }

// export default App


// import React, { useState } from "react";
// import { MdMenu } from "react-icons/md";
// import { IoLogoElectron } from "react-icons/io5";
// import { FaArrowRight } from "react-icons/fa6";
// import { IoCloseSharp } from "react-icons/io5";

// const App = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <nav className="flex justify-between px-4 shadow items-center">
      
//         <div className="w-[150px] cursor-pointer">
//           <img
//             src="https://bookface-images.s3.amazonaws.com/logos/35f9c42f136f9510991c0fae39612fcb89cbd7ef.png"
//             alt="logo"
//           />
//         </div>

      
//         <div className="md:flex hidden space-x-9 items-center">
//           <a href="#" className="cursor-pointer hover:text-blue-500">
//             Pricing
//           </a>
//           <a href="#" className="cursor-pointer hover:text-blue-500">
//             Doc
//           </a>
//           <a href="#" className="cursor-pointer hover:text-blue-500">
//             Changelog
//           </a>
//           <a href="#" className="cursor-pointer hover:text-blue-500">
//             Blog
//           </a>
//           <a href="#" className="cursor-pointer hover:text-blue-500">
//             Login
//           </a>
          
//         </div>
//         <button className="hidden gap-2 py-2 px-4 rounded border md:flex items-center hover:border-green-600">
//             <IoLogoElectron className="text-xl hover:animate-spin" />
//             Electron Developer <FaArrowRight />
//           </button>

     
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-3xl cursor-pointer"
//         >
//           {open ? <IoCloseSharp /> : <MdMenu />}
//         </button>
//       </nav>

//       <div
//         className={`fixed top-0 left-50 h-2/3 w-2/4 bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
//           open ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center px-4 py-3 shadow">
//           <div className="w-[120px]">
//             <img
//               src="https://bookface-images.s3.amazonaws.com/logos/35f9c42f136f9510991c0fae39612fcb89cbd7ef.png"
//               alt="logo"
//             />
//           </div>
//           <button
//             onClick={() => setOpen(false)}
//             className="text-3xl cursor-pointer"
//           >
//             <IoCloseSharp />
//           </button>
//         </div>

//         <ul className="flex flex-col gap-6 px-6 mt-6 font-semibold">
//           <li><a href="#">Pricing</a></li>
//           <li><a href="#">Doc</a></li>
//           <li><a href="#">Changelog</a></li>
//           <li><a href="#">Blog</a></li>
//           <li><a href="#">Login</a></li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default App;



// import React, { createContext, useContext, useState } from 'react'
// import Index from './contextApi/index'


// const Themecontext=createContext()
// const Usercontext=createContext()
// const App = () => {

//   const [theme,settheme]=useState('light')
// const [user,setuser]=useState({name:"ana"})

//   return (

// <div style={{backgroundColor:theme==='ligth'?'beige':'black'}} className=' shadow border-2 border-black h-1/2 w-1/2 p-52 m-10 flex justify-center items-center flex-col '>
//   <Usercontext.Provider value={user}>
//     <Themecontext.Provider  value={{theme,settheme}}>
//      <Index/>
//       </Themecontext.Provider>
//   </Usercontext.Provider>
    
// </div>
//   )
// }

// export default App
// export {Themecontext} 
// export {Usercontext}



// import React, { useReducer } from 'react'
// import { products } from './db/product'
// import { ProducteReduser } from './Reducer/Reducre'
// import { useCard } from './products/cart-add'



//   const {useDispatc}=useCard()
// const App = () => {
  
//   const Addtocard=()=>{
//     useDispatc(
//       {
//         type:"ADD_TO_CARD",
//         payload:products,
//       }
//     )
//   }

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4 ms-20 mt-3">Product</h1>

//       <span className='ms-20'>Add to Card📑:</span>
      
      
//       <div className="flex flex-wrap gap-5 ms-20">
//         {
//         products?.length > 0 && products.map(product => (
//           <div 
//             className="border border-black p-4 m-2 rounded shadow-md w-60" 
//             key={product._id}
//           >
//             <img src={product.img} alt="" />
//             <p className="font-semibold">{product.title}</p>
//             <p className="text-sm">
//               Price: <b>{product.price}</b> | 
//               Qty: <b>{product.quantity}</b>
//             </p>
//             <p className="text-sm text-green-600">
//               Discounted Price: {product.discountedPrice}%
//             </p>
//             <button onClick={Addtocard} className=' mt-5 font-bold bg-green-600 text-white rounded p-2 '>Add to Card📑</button>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default App



import React from 'react'
import {Link,BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import MainPage from './component/mainPage'
import OutputPage from './component/outputPage'
import WeathePage from './component/Weather'
import Login from './component/login'
import PrivateRotes from './component/Pravateroute/Pravateroutes'

const App = () => {

const colarchage=({isActive})=>{
  return{
    color: isActive ? "red":" "
  }
}
  return (
   <>
   <div className='flex justify-center items-center h-full w-full flex-wrap '>
<NavLink className="text-xl m-5 font-bold" to="/" style={colarchage}>Home</NavLink>
<NavLink className="text-xl m-5 font-bold" to="/about" style={colarchage}>About</NavLink>
<NavLink className="text-xl m-5 font-bold" to="/services" style={colarchage} >Services</NavLink>
<NavLink className="text-xl m-5 font-bold" to="/login" style={colarchage} >Login</NavLink>

<Routes>
  <Route path="/" element={<MainPage/>}/>
  <Route path="/about" element={<OutputPage/>}/>
  <Route path="/services" element={<WeathePage/>}/>
<PrivateRotes>
    <Route path='/login' element={<Login/>} />
</PrivateRotes>
</Routes>
   </div>
   </>
  )
}

export default App