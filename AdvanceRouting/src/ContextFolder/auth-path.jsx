import {createContext,useContext, useState} from 'react'


const AutoContext = createContext()


const Autoprovider=({children})=>{

    const [isLogin,setisLogin]= useState(false)


    return(
        <AutoContext.Provider value={{isLogin,setisLogin}}>
            {children}
        </AutoContext.Provider>
    )
}

const uselogin=()=> useContext(AutoContext)

export {uselogin,Autoprovider}

