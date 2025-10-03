import { Navigate } from "react-router-dom";
import { uselogin } from "../../ContextFolder/auth-path";

export const Pravateroute=({children})=>{
    const {isLogin} =uselogin()

    return isLogin? children : <Navigate to='/login'/>

}
